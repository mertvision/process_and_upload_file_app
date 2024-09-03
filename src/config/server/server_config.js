/**
 * Specifically, the dotenv module is used to load environment variables from a .env file into process.env.
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
*/

// Import Statement of Third Party Modules (Libraries)
const dotenv = require("dotenv");

/* serverConfig() function configures the server by loading environment variables. 
This function uses dotenv to read and set environment variables from a .env file. */
const serverConfig = () => {
    dotenv.config();
};

// Export statement of "serverConfig" function
module.exports = serverConfig