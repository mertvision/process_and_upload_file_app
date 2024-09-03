/*
 * Author: Mert Özdemir <mertozdemircontact@icloud.com
 */

// Import Statement of Built-in Node.js Modules
const path = require("path");

// Upload File Class
class UploadFile {

    constructor(){};

     getFileUploadPath(file_name){
      let filename = file_name;
      const uploadPath = path.join(__dirname, "../", "../", "public", filename);
      return uploadPath;
    };
};

module.exports = UploadFile;