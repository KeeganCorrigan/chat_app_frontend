// PACKAGES
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSlash } from '@fortawesome/free-solid-svg-icons';
// STYLESHEETS
require('./connection_sidebar.scss');

function ConnectionSidebar ({ 
  connected,
  handleConnection,
  handleDisconnect,
}) {
  const [loginName, setLoginName] = useState('');
  const [receiverName, setReceiverName] = useState('');

  // METHODS
  const onLoginNameChange = (e) => {
    setLoginName(e.target.value);
  }

  const onReceiverNameChange = (e) => {
    setReceiverName(e.target.value);
  }

  // RENDERS
  // TODO: Abstract these render functions into separate components
  const renderLoginView = () => {
    return (
      <>
        <h2 className="connection-sidebar__login-heading txt-uppercase"> 
          Who are you?
        </h2>
        <TextField
          name="sender_name"
          onChange={e => onLoginNameChange(e)}
          variant="filled"
          style={styles.textField}
          value={loginName}
        />
        <h2 className="connection-sidebar__login-heading txt-uppercase">
          Who do you want to talk to?
        </h2>
        <TextField 
          name="sender_name"
          onChange={e => onReceiverNameChange(e)}
          variant="filled" 
          style={styles.textField}
          value={receiverName}
        />
        <div className="connection-sidebar__button-container flex-row">
          <Button
            style={styles.button}
            disabled={!receiverName}
            onClick={() => handleConnection(loginName, receiverName)}
          >
            Start Chat
          </Button>
        </div>
      </>
    )
  }

  const renderConnectedView = () => {
    return (
      <div className="connection-sidebar__confirmation">
          <h2 className="connection-sidebar__login-heading txt-uppercase flex-column">
            <p className="m-sm">
              Hey <span className="connection-sidebar__login-name">{loginName}</span>,
            </p>
            <p className="m-sm">
              You're Connected to <span className="connection-sidebar__recipient-name">{receiverName}</span>
            </p>
          </h2>
          {renderButtonRow()}
      </div>
    )
  }

  const renderButtonRow = () => {
    return (
      <div className="connection-sidebar__button-container flex-row">
        <div 
          className="connection-sidebar__button flex-row"
          onClick={handleDisconnect}
          title="Disconnect"
        >
          <FontAwesomeIcon icon={faPhoneSlash}/>
        </div>
      </div>
    );
  }

  return (
    <div className={`connection-sidebar flex-column`}>
      <h1 className="connection-sidebar__heading">
        GUILD CHAT
      </h1>
      {!connected ?
        renderLoginView()
        :
        renderConnectedView()
      }
    </div>
  )
}

// STYLES
const styles = {
  button: {
    margin: '1rem',
    background: 'white',
    width: '80%',
  },
  textField: {
    background: 'white',
  }
}

// EXPORTS
export default ConnectionSidebar;
