after cloning the repo run 

npm install && npm start

Currently the calculator has 2 components. I left some notes in each component with details on some refactoring ideas and some other ways to improve the code. 
There is a client folder which houses the main app component and a components folder which has the Keypad.js and Result.js
App.js handles all the state. I originally thought I would have state in each other component, so as it stands they are both class components but could be refactored to functional component given more time. There is also a server folder which holds the server.js file which is just a simple express server that runs on port 300 by default, unless provided a different port through process.ENV. The express server simply serves the static files to the dist folder for bundling. I did not do any styling, I was attempting to get most of the logic and bugs worked out before adding any styling. The keypad component could definitely be layed out with flexbox very easily. 