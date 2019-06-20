# react-a-mole
React/Redux whack=a=mole game by Glenn Hartong

## Requirements
- The game should function consistently in IE11+ and one other major browser
- The game should function consistently in at least 2 unique viewport sizes
- No frameworks or libraries allowed; HTML, CSS, JS only

## Game Objective
Click a “mole” as it appears. The amount of time each mole stays visible is random. The game has time limit. There are controls available to start, pause, and reset the game.

## Scoring and Leveling
- Each successful hit of a mole will increment the score by one point
- Every ten points the level will increment by one
- Every level increase will reset the game clock
- Every level will be five seconds shorter than the previous level

## Random Thoughts
- The nature of generating "random" numbers in JS is such that we may get a duplicate number with consecutive tries. This results in what appears to be the mole not moving. I considered adding a duplicate check to not allow this. However, I believe I can remember the mole in a physical whack-a-mole game popping up in the same hole. For this reason, I did not stop duplicates in the game.
- I used a CSS Button Generator https://www.bestcssbuttongenerator.com/#/14 to style the Pause, Start, Reset buttons. The generator offers complimentary colors and quickly makes a visually appealing button. I suppose this is lazy, but for the sake of aesthetics I made the decision. 
- Favicons generated at https://favicon.io/favicon-generator/
- I used a "tada" animation by Daniel Eden https://daneden.github.io/animate.css/ for the "Level Up!" animation to give it a little flair.
- Thanks for playing !

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
