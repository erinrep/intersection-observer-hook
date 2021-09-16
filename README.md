# Custom React Hook with Intersection Observer

An example of a custom hook that can be used to request additional information when a component is scrolled into view.

On page load, we hit the fortniteapi.io's `/items/list` endpoint to get a list of ten items and render item cards. Then we use the hook to hit `/items/get` to update the item card with more details when it is scrolled into view

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the project

This app uses fortniteapi.io. You'll need your own key and then set the REACT_APP_FN_API_KEY environment variable to it. Note: This is just for tutorial purposes running locally. You should never deploy a React app with secrets, even ones in environment variables.

In the project directory, run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

