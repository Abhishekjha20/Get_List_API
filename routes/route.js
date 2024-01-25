const express = require('express');
const router = express.Router();
const { tablelist } = require('../controller/tablelist'); 

router.get('/getlist', tablelist); 

module.exports = router;