const express = require('express');
const router = express.Router();

const { pushNotice } = require('../controllers/pushNoticeController');

// POST route to push a notice
router.post('/push-notice', pushNotice);

module.exports = router;