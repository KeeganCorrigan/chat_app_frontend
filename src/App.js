// PACKAGES
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
// COMPONENTS
import ConnectionSidebar from './components/ConnectionSidebar/connection_sidebar';
import ChatLog from './components/ChatLog/chat_log';
// CONSTANTS
import { apiUrlMap } from './constants/constants';
// UTILS
import { formatPreviousMessages, generateRoomName } from './utils/format_utils';
// STYLESHEETS
require('./App.scss');

const apiUrl = apiUrlMap[process.env.REACT_APP_ENV]
// CONNECT TO SOCKET
const socket = io.connect(apiUrl)

function App() {
  // Set initial state
  const [state, setState] = useState({
    connected: false,
  });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { receiver } = state;
    
    // Listen for messages on socket
    if (receiver) {
      socket.on('onMessage', message => {
        setMessages([...messages, { name: receiver.name, message }])
      });
    }
  });

  // METHODS
  const onConnection = async (userName, recipientName) => {
    if (userName && recipientName) {
      try {
        // Create or find user by login name
        const userData = await axios.post(`${apiUrl}api/v1/login`, { 
          userName: userName,
        })
        // Verify message recipient has account
        const recipientData = await axios.post(`${apiUrl}api/v1/login/connect`, { 
          recipientName: recipientName,
        })

        // TODO: Add UX error handling for post requests
        const user = userData.data[0];
        const receiver = recipientData.data[0];
        const roomName = generateRoomName(userName, recipientName)
        // Retreive previous messages
        const previousMessages = await axios.get(`${apiUrl}api/v1/messages`, {
          params: {
            room_name: roomName,
          }
        })
        
        // Set socket for private conversation using generated room name
        socket.emit('join', roomName);

        setMessages([...messages, ...formatPreviousMessages(previousMessages.data)])
        setState({
          ...state,
          connected: true,
          user: user,
          receiver: receiver,
          roomName,
        })
      } catch (err) {
        console.error(err);
      }
    }
  }

  const onDisconnect = () => {
    // Reset state
    setState({
      connected: false,
    });
    setMessages([]);
  }

  const onMessageSubmit = async (message) => {
    const { user, receiver, roomName } = state;

    // Send message to connected user via socket connection
    socket.emit('emitMessage', message);

    try {
      const res = await axios.post(`${apiUrl}api/v1/messages`, { 
        sender_id: user.id,
        receiver_id: receiver.id,
        text: message,
        room_name: roomName,
      })

      if (res.status === 201) {
        setMessages([...messages, { name: user.name, message }])
      }
    } catch (err) {
      console.error(err);
    }
  }

  const { connected, user } = state;

  // RENDERS
  return (
    <div className="guild-chat flex-row">
      <div className="guild-chat__connection">
        <ConnectionSidebar 
          handleConnection={onConnection}
          connected={connected}
          handleDisconnect={onDisconnect}
        />
      </div>
      {state.connected &&
        <div className="guild-chat__messages">
          <ChatLog
            messages={messages}
            handleSubmit={onMessageSubmit}
            userName={user.name}
          />
        </div>
      }
    </div>
  );
}

// EXPORTS
export default App;
