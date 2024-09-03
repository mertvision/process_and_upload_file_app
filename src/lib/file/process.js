/**
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

// Import Statement of Built-in Modules (Libraries)
const crypto = require("crypto");
const path = require("path");

// Process Uploading File Class
class ProcessFile {

    constructor() {
        // Constructor boştur; gereksinim varsa kullanılabilir.
    };

    /**
     * Generates a unique file name based on the provided file mimetype and MD5 hash.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @param {string} file_mimetype - The MIME type of the file (e.g., 'image/jpeg').
     * @param {string} file_md5 - The MD5 hash of the file.
     * @returns {Promise<string>} - A promise that resolves to a unique file name.
     * @throws {Error} - Throws an error if the unique file name cannot be generated.
     */
    async getUniqueFileName(req, res, file_mimetype, file_md5) {
        try {
            // Extract file extension from MIME type (e.g., 'jpeg' from 'image/jpeg')
            let fileExtension = file_mimetype.split("/")[1];
            
            // Generate a string to ensure uniqueness, including current timestamp
            const getRandomData = new Date().getTime().toString();
            
            // Generate a random string for additional uniqueness
            const randomBytes = crypto.randomBytes(16);
            const randomString = randomBytes.toString('hex') + path.extname(file_md5);

            // Create the unique file name
            return `${randomString}-${file_md5}-${getRandomData}.${fileExtension}`;
        } catch (err) {
            // Log the error and rethrow it for further handling
            console.error("Error generating unique file name:", err.message);
            throw err;
        };
    };
};

module.exports = ProcessFile;
