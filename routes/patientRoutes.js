// const express = require("express");
// const router = express.Router();
// const { deletePatient, getPatientById, updatePatient } = require("../controllers/patientController");

// // 🗑️ DELETE request to remove a patient by ID (No Change)
// router.delete("/delete/:id", deletePatient);

// // 🔍 GET request to fetch patient by ID
// router.get("/get/:id", getPatientById);

// // ✏️ PUT request to update patient by ID
// router.put("/update/:id", updatePatient);

// module.exports = router;

const express = require('express');
const router = express.Router();

const { getPatientByEmail , addAppointment } = require('../controllers/patientController');

// ✅ Route to get patient by email
router.post('/get-by-email', getPatientByEmail);
router.post('/add-appointment', addAppointment);

module.exports = router;