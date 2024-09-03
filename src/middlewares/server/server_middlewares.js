/**
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 * 
 */

const express = require("express");
const fileupload = require("express-fileupload");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("../../routes/routes");
const path = require("path")

const serverMiddlewares = (server) => {
    server.use(express.json());
    server.use(fileupload({
        useTempFiles: true,
        tempFileDir: path.join(__dirname, "../", "../", "../", "tmp"),
        createParentPath: true,
        limits: {fileSize: 50*1024*1024}
    }));
    server.use(helmet());
    server.use(morgan('common'));
    server.use('/api', routes);
};

module.exports = serverMiddlewares;