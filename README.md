# Issue: Infinite loop triggered by channel.watch()

While following the tutorial on the getStream Blog [link](https://getstream.io/blog/securing-a-chat-app-with-react-and-auth0/#add-chat-functionality-with-stream:~:text=section.-,Add%20chat%20functionality%20with%20Stream), the `channel.watch()` appears to be causing an infinite loop of failed calls to the getStream API.

See `ChatView.js`, line 47 in this repo. Line 55 in the blog link.

To reproduce
```
git clone git@github.com:hochoy/debug-getstream.git
npm install
mkdir src/test_creds
touch src/test/creds/getstream.json

// add the following to the json
// {
//   "REACT_APP_GS_TOKEN": "<TOKEN>",
//   "REACT_APP_GS_UID": "<USERID",
//   "REACT_APP_GS_KEY": "<APIKEY>"
// }

npm start
```

</br>
You should expect to see:
</br>
</br>
The browser calling the getStream API infinitely and returning a connection error message.
</br>
</br>

!["network_blast"](network_blast.png)
</br>
</br>
Lots of time-outs
</br>
</br>

!["console_log"](console_log.png)



# BOILERPLATE CRA

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
