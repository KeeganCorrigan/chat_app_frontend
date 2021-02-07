# Getting Started with Guild Chat

This is the front end component of the Guild Chat app. You can find it live at https://keegan-guild-chat-fe.herokuapp.com/. You can view the back end repo [here](https://github.com/KeeganCorrigan/chat_app_backend), and you can find the backend deployed live at https://keegan-guild-chat-be.herokuapp.com/ (please see the github repo for additional instructions!).

This chat app uses [socket.io-client](https://www.npmjs.com/package/socket.io-client) to enable `private` (I use private loosely since there is currently no authentication or authorization implemented) chat between two users.

## Technologies used

* [React](https://reactjs.org/)
* [Font Awesome](https://www.npmjs.com/package/react-fontawesome)
* [Material UI](https://material-ui.com/)
* [Socket.io-client](https://www.npmjs.com/package/socket.io-client)
* [Axios](https://www.npmjs.com/package/axios)

## Getting Started Locally

To start locally:

1. Clone the repo locally: `git clone https://github.com/KeeganCorrigan/chat_app_frontend.git`
2. Navigate to the root directory of the project
3. run `npm install`
4. run `npm run start-local` to run locally (you can run `npm start` to connect to the production database).

In conjunction you will probably want to run the server locally, please visit [here](https://github.com/KeeganCorrigan/chat_app_backend) for additional details!

## App in action

On production, you can login as the users `Àrtemis` and `Minerva` or create your own users (which is as simple as typing a name in the `Who are you?` field, if the user you are attempting to send messages to does not exist you will have to create that user as well by typing that corresponding name into the `Who are you?` field as well).

### Chatting with another user:

![image](https://github.com/KeeganCorrigan/chat_app_frontend/blob/main/content/images/chat%20app%20in%20action.gif)

**SPECIAL NOTE**: You can generate a random message by clicking the dice icon to the left of the message input field.

### The log in screen:

![image](https://github.com/KeeganCorrigan/chat_app_frontend/blob/main/content/images/logging%20in%20chat%20app.gif)

**SPECIAL NOTE**: When typing in a new user name in the `Who are you?` field, a user will be created. So you do not have to use pre-existing/seeded users.

## Additional TODOs:

* Add testing
* Make app mobile friendly
* Add additional accessibility features
* Refine UX experience (including more robust error handling)
* ... and so much more!
