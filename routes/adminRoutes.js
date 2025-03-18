const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
// Add patient
router.post('/patients', adminController.addPatient);

// Get all patients
router.get('/patients', adminController.getAllPatients);

// Update patient
router.put('/patients/:id', adminController.updatePatient);

// Delete patient
router.delete('/patients/:id', adminController.deletePatient);


// Get all doctors
router.get('/doctors', adminController.getAllDoctors);

// Add a new doctor
router.post('/doctors', adminController.addDoctor);

// Modify an existing doctor
router.put('/doctors/:id', adminController.modifyDoctor);

// Delete a doctor
router.delete('/doctors/:id', adminController.deleteDoctor);

// GET all staff
router.get('/staff', adminController.getAllStaff);

// CRUD for Nurse
router.post('/nurse', adminController.addNurse);
router.put('/nurse/:id', adminController.modifyNurse);
router.delete('/nurse/:id', adminController.deleteNurse);

// Same pattern follow karke baaki staff ka bana sakta hai!
module.exports = router;