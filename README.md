# node-express-react-iso-starter
A starter pack for a Node/Express web app using React.

Everyone seems to have their [own](https://github.com/RickWong/react-isomorphic-starterkit) [preferred](https://github.com/DavidWells/isomorphic-react-example) [way](https://github.com/rackt/react-router-mega-demo) of setting this stuff up - I've gone for a directory structure that makes sense to me, and a few less tools than some.

## Getting started
    npm install
    npm start
Navigate to localhost:5000 and you'll see the demo app.

## Development
    gulp watch
    nodemon run-server.js
This will run a development build of the app, including source maps to help debug react components. Any updates to the code will trigger a rebuild and redeploy.

## Features
- All code can be written in ES2015 and jsx thanks to [Babel](https://babeljs.io/).
- Isomorphic: each page can be fully rendered on the server or client. That means we can take full advantage of [React](https://facebook.github.io/react/) and [react-router](https://github.com/rackt/react-router) without compromising page indexing or users with javascript turned off (try it!). It also means that the first page load is very fast - the server sends all the css and html required for a page at the same time, and react is loaded asynchronously.
- Comes with [skeleton css](http://getskeleton.com/) inlined into the html. Feel free to swap that out for your favourite css framework in src/views/index.ejs.
- Ready-made [gulpfile](http://gulpjs.com/) deals with downgrading ES2015 syntax, converting jsx, minifying, and bundling javascript with [Browserify](http://browserify.org/).
