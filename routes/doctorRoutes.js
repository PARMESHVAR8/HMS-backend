const express = require('express');
const router = express.Router();

// ✅ Import doctor controllers
const { getDoctorByEmail, addTodaysAppointment } = require('../controllers/doctorController');

// ✅ Route to get doctor by email
router.post('/get-by-email', getDoctorByEmail);

// ✅ Route to add today's appointment for doctor
router.post('/add-todays-appointment', addTodaysAppointment);

module.exports = router;