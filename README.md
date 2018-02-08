# SSR ReactJS Boilerplate Project

A template of README best practices to make your README simple to understand and easy to use.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Support](#support)
* [Contributing](#contributing)

## Installation

Download to your project directory, add `README.md`, and commit:

```
npm install
```

## Usage

Replace the contents of `README.md` with your project's:

* React Server Side Rendering Boilerplate
* This project is meant to serve as a starting point for serverside rendering using the MongoDB, ExpressJS, ReactJS and NodeJS.
  Usage instructions
  ======

        1. NPM Package Dependencies and Descriptions
            	..* axios: 0.16.2

        			.__Promise based HTTP client for the browser and node.js__ [Github](https://github.com/axios/axios) || [NPM](https://www.npmjs.com/package/axios)
        			..* babel-cli: 6.26

        			.__Babel command line tool__ [Github](https://github.com/babel/babel/tree/master/packages/babel-cli) || [NPM](https://www.npmjs.com/package/babel-cli)
        			..* babel-core: 6.26.0

        			.__Babel compiler core__[Github](https://github.com/babel/babel/tree/master/packages/babel-core) || [NPM](https://www.npmjs.com/package/babel-core)
            	..* babel-loader: 7.1.2

        			.__This package allows transpiling JavaScript files using Babel and webpack.__ [Github](github.com/babel/babel-loader) || [NPM]https://www.npmjs.com/package/babel-loader)
            	..* babel-preset-env: 1.6.0

        			.__A Babel preset that compiles ES2015+ down to ES5 by automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments.__[Github](github.com/babel/babel-preset-env) || [NPM](https://www.npmjs.com/package/babel-preset-env) || [Website](http://babeljs.io)
            	..* babel-preset-es2015: 6.24.1

        			.__Babel preset for all es2015 plugins.__[Github](github.com/babel/babel/tree/master/packages/babel-preset-es2015) || [NPM](https://www.npmjs.com/package/babel-preset-es2015)
            	..* babel-preset-es2017: 6.24.1

        			.__Babel preset for all es2017 plugins.__[Github](github.com/babel/babel/tree/master/packages/babel-preset-es2017) || [NPM](https://www.npmjs.com/package/babel-preset-es2017)
            	..* babel-preset-react: 6.24.1

        			.__Babel preset for all React plugins__[Github](https://github.com/babel/babel/tree/master/packages/babel-preset-react) || [NPM](https://www.npmjs.com/package/babel-preset-react)
            	..* babel-preset-stage-0: 6.24.1

        			.__Package description here__[Github](https://github.com/expressjs/compression) || [NPM](https://www.npmjs.com/package/compression)
            	..* compression: 1.7.0

        			.__Package description here__[Github](https://github.com/kimmobrunfeldt/concurrently) || [NPM](https://www.npmjs.com/package/concurrently)
            	..* concurrently: 3.5.0

        			.__Package description here__[Github](https://github.com/expressjs/express) || [NPM](https://www.npmjs.com/package/express)
          		..* express: 4.15.4  

        			.__Package description here__[Github](http://github.com/villadora/express-http-proxy) || [NPM](https://www.npmjs.com/package/express-http-proxy)
          		..* express-http-proxy: 1.0.6

        			.__Package description here__[Github](https://github.com/lodash/lodash) || [NPM](https://www.npmjs.com/search?q=lodash)
          		..* lodash: 4.17.4

        			.__Package description here__[Github](https://github.com/remy/nodemon) || [NPM](https://www.npmjs.com/search?q=nodemon&page=1&ranking=optimal)
          		..* nodemon: 1.12.0

        			.__Package description here__[Github](https://github.com/mysticatea/npm-run-all) || [NPM](https://www.npmjs.com/search?q=npm-run-all&page=1&ranking=optimal)
          		..* npm-run-all: 4.1.1

        			.__Package description here__[Github](https://github.com/facebook/react) || [NPM](https://www.npmjs.com/package/react)
          		..* react: 16.0.0

        			.__Package description here__[Github](http://github.com/facebook/react) || [NPM](https://www.npmjs.com/package/react-dom)
          		..* react-dom: 16.0.0

        			.__Package description here__[Github](http://github.com/nfl/react-helmet) || [NPM](https://www.npmjs.com/package/react-helmet)
        			..* react-helmet: 5.2.0

        			.__Package description here__[Github](http://github.com/reactjs/react-redux) || [NPM](https://www.npmjs.com/package/react-redux)
        			..* react-redux: 5.0.6

        			.__Package description here__[Github](http://github.com/ReactTraining/react-router) || [NPM](https://www.npmjs.com/package/react-router-config)
        			..* react-router-config: 1.0.0-beta.4

        			.__Package description here__[Github](http://github.com/ReactTraining/react-router) || [NPM](https://www.npmjs.com/package/react-router-dom)
        			..* react-router-dom": 4.2.2

        			.__Package description here__[Github](http://github.com/reactjs/redux) || [NPM](https://www.npmjs.com/package/redux)
      				..\* redux": 3.7.2

        			.__Package description here__[Github](http://github.com/gaearon/redux-thunk) || [NPM](https://www.npmjs.com/package/redux-thunk)
        			..* redux-thunk: 2.2.0

        			.__Package description here__[Github](http://github.com/yahoo/serialize-javascript) || [NPM](https://www.npmjs.com/package/serialize-javascript)
        			..* serialize-javascript: 1.4.0

        			.__Package description here__[Github](http://github.com/webpack/webpack) || [NPM]https://www.npmjs.com/package/webpack)
        			..* webpack: 3.5.6

        			.__Package description here__[Github](http://github.com/webpack/webpack-dev-server) || [NPM](https://www.npmjs.com/package/webpack-dev-server)
        			..* webpack-dev-server: 2.8.2

        			.__Package description here__[Github](http://github.com/survivejs/webpack-merge) || [NPM](https://www.npmjs.com/package/webpack-merge)
        			..* webpack-merge: 4.1.0

        			.__Package description here__[Github](http://github.com/liady/webpack-node-externals) || [NPM](https://www.npmjs.com/package/webpack-node-externals)
        			..* webpack-node-externals: 1.6.0

       2. Putting together our Rendering Server
      			 	1. Build Bare bones Application
      							..• Create a simple express server with a home component.
      				2. Just a landing page
      				3. Add in serverside Rendering
      				4. Add React router
      				5. Improve SSR
      				6. Redux

- Support instructions
- Contributing instructions

## Support

Please [open an issue](https://github.com/org/repo/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/org/repo/compare/).
