# Getting Started with Guild Chat

This is the front end component of the Guild Chat app. You can find it live at (https://keegan-guild-chat-fe.herokuapp.com/). You can view the back end repo [here](https://github.com/KeeganCorrigan/chat_app_backend), and you can find the backend deployed live at (https://keegan-guild-chat-be.herokuapp.com/) (please see the github repo for additional instructions!).

This chat app uses (socket.io-client)[https://www.npmjs.com/package/socket.io-client] to enable `private` (I use private loosely since there is currently no authentication or authorization implemented) chat between two users.

## Technologies used

* (React)[https://reactjs.org/]
* (Font Awesome)[https://www.npmjs.com/package/react-fontawesome]
* (Material UI)[https://material-ui.com/]
* (Socket.io-client)[https://www.npmjs.com/package/socket.io-client])
* (Axios)[https://www.npmjs.com/package/axios]

## Getting Started Locally

To start locally:

1. Clone the repo locally: `git clone https://github.com/KeeganCorrigan/chat_app_frontend.git`
2. Navigate to the root directory of the project
3. run `npm install`
4. run `npm run start-local` to run locally (you can run `npm start` to connect to the production database).

In conjunction you will probably want to run the server locally, please visit [here](https://github.com/KeeganCorrigan/chat_app_backend) for additional details!

## App in action

### Chatting with another user:

![image](https://drive.google.com/file/d/1xo2J5-PVg3nYS8igoDyd5QGA82hFdrd3/view?usp=sharing)

### The log in screen:

![image](https://drive.google.com/file/d/1hpoaMpC4AeZSsslOyQRr2d08q1dKqe-B/view?usp=sharing)

## Additional TODOs:

* Add testing
* Make app mobile friendly
* Add additional accessibility features
* Refine UX experience (including more robust error handling)
* ... and so much more!