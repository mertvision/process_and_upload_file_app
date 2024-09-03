/**
 * Controller functions for single and multiple file uploads
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

// Import Statement of Built-in Node.js Modules
const path = require("path");

// Import Statement of Libs Classes
const ProcessFile = require("../lib/file/process");
const UploadFile = require("../lib/file/upload");

const uploadSingleFile = async (req, res) => {
      try{
            let file = req.files.singleFile;
    
            if(file.truncated){
                throw new Error("File is not uploaded. Unexpected error");
            };

            const processFileClassInstance = new ProcessFile();
            const uniqueFileName = await processFileClassInstance.getUniqueFileName(req, res, file.mimetype, file.md5);
    
            console.log(uniqueFileName)
            file.name = uniqueFileName;
         
            const saveFilePath = path.join(__dirname, "../", "../", "public", "uploads", file.name);
            
            await file.mv(saveFilePath);
        
            res.redirect('/');
        }
        catch(err){
            console.log(err);
            res.send("File is not uploaded.")
        };
};

module.exports = {uploadSingleFile};