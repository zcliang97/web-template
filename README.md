# Web App Template

## Description
This is a web app template set up with ReactJS in the frontend and Python in the backend and managed with Webpack and Babel.
> To see a list of included libraries please go scroll down to Libraries section
To start a new web app, clone the project and follow the install instructions

## Install Instructions

Install Node.js

> *For Windows/Mac:* <br>
> Go to https://nodejs.org/en/download/ and download the appropriate file.
>
> *For Linux:* <br>
> Open the terminal and run the following commands:
>
> `sudo curl -sL https://deb.nodesource.com/setup_8.x -o setup.sh`<br>
> `sudo bash setup.sh`<br>
> `sudo apt-get install nodejs`<br>
> `sudo apt-get install build-essential`<br>

Then download the project.

> Click the "Clone or Download" button above to download the project.

Install python

> Go to the link and select the appropriate python download for your system
> https://www.python.org/download/releases/2.7/

## Manual Setup Instructions

Setup Webpack

> `npm i webpack --save-dev`
> `npm i webpack-dev-server --save-dev`

Setup React

> `npm i react --save-dev`

Setup Babel

> `npm i babel --save-dev`
> `npm i babel-core --save-dev`


Setup Flask (Backend)

> `pip install flask`

Starting up the website

> For the Frontend: `npm run start-dev`<br>
> For the Backend: `python server/server.py`

## Libraries
> Note these are the libraries that I chose, if you want to use an alternative package (eg. bower), feel free to uninstall the packages from the 'package.json' file.

- "babel": "^6.23.0",
- "babel-core": "^6.26.0",
- "babel-loader": "^7.1.2",
- "babel-polyfill": "^6.26.0",
- "babel-preset-es2015": "^6.24.1",
- "babel-preset-react": "^6.24.1",
- "es2015": "0.0.0",
- "react": "^16.2.0",
- "react-dom": "^16.2.0",
- "webpack": "^3.10.0",
- "webpack-dev-server": "^2.11.1"
- "react-hot-loader": "^3.1.3"

## TODO

- Incorporate CSS styling with css-loader
- Add axios backend support
