# Docker / Webpack / Rot.js Demo
Just a small project to teach myself Rot. I decided to use webpack and docker to serve the app to make future deployments as well as sharing with others easier. I highly recommend reading up on Webpack, NPM and Docker before using this application.

# Installation/Usage
 - Install Docker and Docker Compose
 - Install Node/NPM and Yarn
 - Install webpack: npm install -g webpack
 - You will have an easier time using multiple terminals and something like tmux so you can see multiple screens at the same time.
 - Clone this repository and CD into the app directory
 - RUN: **yarn install** to install all dependencies
 - CD into the root folder of repository
 - RUN: **docker-compose up --build**
 - CD back to the app/ directory
 - RUN: **webpack -d --watch --colors --progress
 - Load http://localhost:8888 in your browser and you should see the game screen.