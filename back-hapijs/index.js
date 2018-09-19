'use strict';

const Hapi = require('hapi');
const config = require('./config/config');
const Inert = require('inert');
const connection = require('./connection/connection');
var routes = require('./routes/routes');

const server = new Hapi.Server({
    port: config.application.port,
    host: config.application.host,
    routes: {
        json: {
            space: 4
        },
        cors: true
    }
});


connection.connect();

const init = async () => {
  
    await server.register([
      {plugin: require('inert')}
    ]);
    
    for (var app_route in routes) {
        server.route(routes[app_route]);
    }
  
    await server.start();
    console.log('Server is running');
  }
  
  init();

