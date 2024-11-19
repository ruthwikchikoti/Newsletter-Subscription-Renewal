const express = require('express');
const { startFlow } = require('../controllers/flowController');
const router = express.Router();

router.post('/start', startFlow);

module.exports = router;