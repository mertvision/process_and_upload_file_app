/**
 * main.js is the main file of the Node application. The command lines used to start the server are kept here.
 * 
 * Author: Mert Özdemir <mertvision@outlook.com>
 */

// Import Statement of Third Party Modules (Libraries)
const express = require("express");
// Import Statement of Our Modules (Libraries)
const serverMiddlewares = require("../middlewares/server/server_middlewares.js");
const serverSet = require("../middlewares/server/server_set.js");

// Import Statement of Configuration Modules (Libraries)
const serverConfig = require("../config/server/server_config");

// Import Statement of Initialization Modules (Libraries)
const init = require("../init/server/server");

// Define an instance of the Express module
const server = express();

serverConfig();

// Define the secondary port number
const SECONDARY_PORT = 8090;
// Retrieve the port value from environment variables; use the secondary port if not defined.
const PORT = process.env.PORT || SECONDARY_PORT;

// Server set
serverSet(server);
// Server middlewares
serverMiddlewares(server);

// Server / address
server.get('/', (req, res)=> {
    res.render('index');
});

// Invoke init() function to start server
init(server, PORT);





