// PACKAGES
import React, { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
//CONSTANTS
import { dadJokeList } from '../../constants/constants';
// STYLESHEETS
require('./chat_log.scss');

function ChatLog ({ 
  handleSubmit,
  messages,
  userName,
}) {
  const [message, setMessage] = useState('')
  const messagesEndRef = useRef()
  
  // METHODS
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const onTextChange = (e) => {
    setMessage(e.target.value);
  }

  const randomDadJoke = () => {
    const randomDadJoke = dadJokeList[Math.floor(Math.random() * dadJokeList.length)];
    setMessage(randomDadJoke);
  }
  
  const onSubmit = (message) => {
    setMessage('');
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    handleSubmit(message);
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages])

  // RENDERS
  const renderMessages = () => {
    return messages.map(({ name, message }, index) => (
      <div key={index}>
        <h3 className="chat-log__message-container">
          <span className={`chat-log__message--${name === userName ? 'sender' : 'recipient'}`}>
            {name}
          </span>
          :
          <span className="chat-log__message">{message}</span>
        </h3>
      </div>
    ))
  }

  const renderMessageInput = () => {
    return (
      <form className="chat-log__form flex-row" onSubmit={() => onSubmit(message)}>
        <div 
          className="chat-log__form-random-submit"
          onClick={() => randomDadJoke()}
        >
          <FontAwesomeIcon 
            icon={faDice}
          />
        </div>
        <TextField 
          name="message"
          onChange={e => onTextChange(e)}
          value={message}
          id="outlined-multiline-static"
          variant="outlined"
          label="Message"
          style={styles.textField}
        />
        <Button
          disabled={!message}
          onClick={() => onSubmit(message)}
          style={styles.button}
          type="submit"
        >
          Send Message
        </Button>
      </form>
    )
  }

  return (
    <div className="chat-log flex-column">
      <div className="chat-log__messages">
        {renderMessages()}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-log__message-input">
        {renderMessageInput()}
      </div>
    </div>
  )
}

// STYLES
const styles = {
  button: {
    margin: '1rem',
    background: 'white',
  },
  textField: {
    background: 'white',
    width: '80%'
  }
}

// EXPORTS
export default ChatLog;
