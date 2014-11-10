# FluxMail

Warning: **Work in progress!**

A Flux + React reference application, using `react-router`. For learning purposes.

I'm using it myself to play with the Flux SPA architecture.

This is loosely based on [BBCloneMail](https://github.com/Foxandxss/bbclonemailBBCloneMail), the Marionette.js reference application originally created by its author.

## Installation
This project uses[gulp](http://gulpjs.com) and [browserify](http://browserify.org) to build the application output.

Clone this repo and then:

    npm install 
    gulp

This will generate the `dist/` folder with the built app. To launch the app, you can simply fire up a quick development webserver, like:

    cd dist && python -m SimpleHTTPServer

That will launch the application on (http://localhost:8000). During development, you can use

    gulp watch

To rebuild everything upon changes.

## Components

+ [React](http://facebook.github.io/react/) for the view components
+ [Flux] (http://facebook.github.io/flux) dispatcher and stores
+ [React router](https://github.com/rackt/react-router/) for routing
+ [Bootstrap] (http://getbootstrap.com) for layout and basic styling



