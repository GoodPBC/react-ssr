# SSR ReactJS Boilerplate Project

* This project is meant to serve as a starting point for server-side rendering using the MongoDB, ExpressJS, ReactJS and NodeJS.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Rendering Server Setup](#rendering)
* [Server Configuration](#Server_Config)
* [Support](#support)
* [Contributing](#contributing)

## Installation

Download to your project directory, add `README.md`, and commit:

```
npm install
```

## Usage

# Usage instructions

        1. NPM Package Dependencies and Descriptions
            	..* axios: 0.16.2

        			.__Promise based HTTP client for the browser and node.js__ [Github](https://github.com/axios/axios) || [NPM](https://www.npmjs.com/package/axios)
        			..* babel-cli: 6.26

        			.__Babel command line tool__ [Github](https://github.com/babel/babel/tree/master/packages/babel-cli) || [NPM](https://www.npmjs.com/package/babel-cli)
        			..* babel-core: 6.26.0

        			.__Babel compiler core__[Github](https://github.com/babel/babel/tree/master/packages/babel-core) || [NPM](https://www.npmjs.com/package/babel-core)
            	..* babel-loader: 7.1.2

        			.__This package allows transpiling JavaScript files using Babel and webpack.js.__ [Github](github.com/babel/babel-loader) || [NPM]https://www.npmjs.com/package/babel-loader)
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

        			.__Package description here__[Github](http://github.com/webpack.js/webpack.js) || [NPM]https://www.npmjs.com/package/webpack.js)
        			..* webpack.js: 3.5.6

        			.__Package description here__[Github](http://github.com/webpack.js/webpack.js-dev-server) || [NPM](https://www.npmjs.com/package/webpack.js-dev-server)
        			..* webpack.js-dev-server: 2.8.2

        			.__Package description here__[Github](http://github.com/survivejs/webpack.js-merge) || [NPM](https://www.npmjs.com/package/webpack.js-merge)
        			..* webpack.js-merge: 4.1.0

        			.__Package description here__[Github](http://github.com/liady/webpack.js-node-externals) || [NPM](https://www.npmjs.com/package/webpack.js-node-externals)
        			..* webpack.js-node-externals: 1.6.0

## Rendering Server - Putting it together

### Build A Bare bones Express Application

1. **Create a simple express server with a home component.**
   we are going to create our package.json file and install all of our packages from above. -- Command["npm init"]

we will create a "src" directory. This is the directory that will hold all of our server and react app logic for our app.

Inside our src directory lets make an "index.js" file. this is our root file for our express application. will set up a new express app and basic server in this file like so: [gitcommit](https://github.com/GoodPBC/react-ssr/commit/afb58e5ceb89b32c9e6e1c36c99ef8aa5997d4a0)

We will then make a test route in our express application to make sure that everything is properly wired up. We do this using a route handler like this:
[gitcommit](https://github.com/GoodPBC/react-ssr/commit/fc14167f31004c7fbd94c17abf59355e26ee07da)

We will need a place to put our react components when we start creating them. Inside the src directory create a folder called client. Inside the client directory we will create a components folder and in components we will create our first simple component called "home.js" like this:
[gitcommit](https://github.com/GoodPBC/react-ssr/commit/8ba19f125d28e46cdcf2a32784d076132b42357c)

to do all of this with one command you can use the **"&&"** operator:

```
mkdir client && cd client && mkdir components && cd components && touch Home.JS
```

We will now create our component(check the above git commit ):

What we wrote here is JSX. It needs to be converted into HTML so that we can send it to the DOM(Document Object Model) so that we can render it in the Browser. In order to do this we make use of the React DOM Library that we installed. We use it to mount our components in the browser by making use of the "reactDOM.render helper function". The reactDOM library also has a helper function called renderToString. The difference between the two is that the React Dom Render function mounts our components to a DOM node. The renderToString function Renders a bunch of components ONCE and turns them into raw HTML and returns it as a string. produces a string of HTML

We will require in our libraries for the time being using require statements in our index.js file like so:
[gitcommit](https://github.com/GoodPBC/react-ssr/commit/6da56fcdcfa7ba8bf07f31f9d2f20e23134fda73)

Now we will render the Home component as a string by writing additional logic inside of our express route handler

If you have experience with Express, this code should be setting off alarm bells because what we are doing here will not work just yet. We are writing JSX inside of our Node server and it has no idea what exactly that is. If you try to run the index.js file we get an error of un unexpected token [Error Image](Project_Images/UnexpectedTokenError_01.07.56 PM.png)

We need a way to set up the rendering of this JSX on our server because right now it will not recognize it. Lets look at a normal client side rendering for React:
[Client Side Render](Project_Images/NormalClientSideRender.png)
We normally have a bunch of components that gets bundled into a single file gets ran through webpack.js and Babel and and it gets trans-piled down into es2015 code in our bundle.js file which can be recognized by the browser.

We are going to essentially now do the same thing expect on the server instead of the client. like this:
[SSR Render with webpack.js and Babel](Project_Images/NormalClientSideRender.png)
The main difference is that we will use Node to run our bundled file. Node Normally runs our root (app.js || index.js || server.js normally) file by looking through all of the required modules and bringing them in to run our express app as desired. By using webpack.js on our server side code we are basically telling to our node server to bypass all of the require statements and let webpack.js bundle our required files.

To make this happen we need to configure webpack.js. In the root directory we create a file called 'webpack.js.server.js' to indicate that this is our server-side webpack.js file.

We need to tell webpack.js to target node because we are bundling for the server instead of the client. We also need to tell webpack.js where to look for our root file or 'entry' by feeding it a project path. We also need to tell webpack.js where to put the outputted bundle that it generates. The last thing we need to do is to tell webpack.js to run babel on all files that it runs so that all of our code is trans-piled to es5 code. and feed it some rules to and presets, which are noted in the code comments here:
[github commit](https://github.com/GoodPBC/react-ssr/commit/6c46f0169aad0245862f8e808181aae71e7ec7c4#diff-9f405c4b4741262db413b61e491797f4)

This is our server-side webpack config file that will allow us to write JSX on our server and convert it into es2015 and execute it with node.js. Now that we have created this file we will create a script in our server's pakcage.json that will do a build(transpile our code so it can be read by the browser) in our app. In our file we will add a script as such:

```
"dev:server:build": "webpack --config webpack.server.js"
```

This will create our build directory and bundle file. We are also going to make use of our nodemon package and create a development server run script in our package.json file. This will allow us to keep the server automatically running and "hot reloading" as we develop our app. This means that each time we make a change to our app our development server will automatically restart and reflect our latest code. the script is like this

```
"dev:server": "nodemon build/bundle.js"
```

To start our development server we will use the command:

```
npm run dev:server
```

We now should be rendering our first component at localhost:5000. If all is well you should be seeing our component on your screen and you should be seeing the following code upon browser inspection:

```
<div data-reactroot="">I am the Home Component</div>
```

This is pure HTML, we are not running and Javascript in the browser!

If you are having issues please submit your issue to [Issues](https://github.com/GoodPBC/react-ssr/issues)

### **EXPRESS SERVER SETUP Recap**

##### What Problems have we solved here?

_**Problem**_ - Running JSX on the Server
_**Solution**_ - Run webpack on our server code and then execute the bundle.

_**Problem**_ - We need to turn components into HTML  
_**Solution**_ - We use the 'react-dom/server' Library's 'renderToString' function

with traditional react we usually have a a separate client and server. and we write our components in JSX on the client side. We use react-dom's **"render()"** function to mount our components to a particular DOM node.

With SSR we have discovered that we bundle all of our code on the server and instead use react-dom's **"renderToString()"** helper function to create an HTML structure on our server and send it all at once to the browser as raw HTML.

## Server_Config

**Setting Up A Dynamic Development Environment**

In this section we will continue to work with our server. We will do additional setup and continue to refactor our code in order to give ourselves a full understanding of how to pull our server together.

With our current setup we have one main challenge. Open your Home.js component and make some change to the content in the component and restart your app. You will notice that what is being rendered will not change. In order to have the changes represented we will need to run our build script again. That defeats the purpose of our setting up our hot reloading with nodemon. To fix this we will making changes to our package.json scripts. As it stands our build process is very manual. We want to achieve something like this:
[Desired Development Build Flow](Project_Images/Desired_Dev_Build_Flow.png)

Lets first make it so that webpack will restart with any changes to any of the files that we are working with by using the --watch operator to the end of our dev:server:build script. now run the script and you should get a terminal massage that says webpack is watching the files.

This tells webpack to watch the files associated with our bundle and re-run anytime a change is made to one of them. Lets test this out by adding some basic style to our Home Component. Like so:

```
const Home = () => {
  return (
    <div>
      <h1 style={HomeStyle}>I am the Home Component</h1>
    </div>
  );
};

const HomeStyle = {
  color: 'red',
  backgroundColor: 'black'
};
```

If you refresh your page you will see that Webpack has re-bundled the file and nodemon has restarted the server to reflect the changes made to our bundle. So now we have a pretty dynamic development build and dev process going.

**Lets Talk About Isomorphic Javascript & Universal Javascript**

_What is it_?

**Universal Javascript** means that the same javascript code runs on the server and the browser.
**Isomorphic Javascript** means that the same javascript code runs on the server and the browser.
**Server Side Rendering** means we are generating HTML on the Server

In order to be truly using Universal Javascript, We should be using the same exact code on the server and client. However, at the time of creating this boilerplate NodeJS does not have built in support for es2015 modules. So we are using the the CommonJS module system in our index.js file will makes use of require statements and in our components we are using the es2015 modules system which makes use of imports and exports. We are running webpack and babel over our whole project., which does support es2015 modules. This allows us to make use of the es2015 modules. Because our server files are being handled by webpack and babel we want to do this so we can keep the context between react and express/node the same. Lets refactor our code to convert our index.js require statements to import statements like this:
[github commit](https://github.com/GoodPBC/react-ssr/commit/5bc3b3d3c7858abaa8810e29f52701bab09ecab1#diff-1fdf421c05c1140f6d71444ea2b27638)

**Event Handler Gotcha!!!**

Normally we have our ReactJS components that are sent to the browser and rendered to a DOM node and then the event handlers are set up in the browser.

With the way we have our application set up, we are bundling on the server and sending a string or raw HTML to the browser, so no javascript code is being sent to the browser. This means that our event handlers will not register.

We need to create a way to send down all of our applications javascript code to the browser so that we can inject it onto the client and make our application work the way we want it to.

2. Just a landing page
3. Add in server-side Rendering
4. Add React router
5. Improve SSR
6. Redux

* Support instructions
* Contributing instructions

## Support

Please [open an issue](https://github.com/org/repo/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull
request](https://github.com/org/repo/compare/).
