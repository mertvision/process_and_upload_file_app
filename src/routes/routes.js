/**
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

const express = require("express");
const router = express.Router();

const {uploadSingleFile} = require("../controllers/file");

router.post('/single', uploadSingleFile);

module.exports = router;