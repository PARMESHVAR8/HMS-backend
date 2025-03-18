const express = require('express');
const router = express.Router();

const { addStaff, getStaffByEmail } = require('../controllers/staffController');

// Add new staff (Universal)
router.post('/staff', addStaff);

// Get staff by email/contact number
router.post('/get-staff', getStaffByEmail);

module.exports = router;