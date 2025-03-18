// const Patient = require("../models/patientModel");

// // 🗑️ DELETE Patient by ID (No Changes)
// exports.deletePatient = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedPatient = await Patient.findByIdAndDelete(id);

//     if (!deletedPatient) {
//       return res.status(404).json({ message: "Patient not found" });
//     }

//     res.json({ message: "Patient deleted successfully", deletedPatient });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting patient", error });
//   }
// };

// // 🔍 FETCH Patient by ID
// exports.getPatientById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const patient = await Patient.findById(id);

//     if (!patient) {
//       return res.status(404).json({ message: "Patient not found" });
//     }

//     res.json(patient);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching patient data", error });
//   }
// };

// // ✏️ UPDATE Patient by ID
// exports.updatePatient = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updateData = req.body;

//     const updatedPatient = await Patient.findByIdAndUpdate(id, updateData, {
//       new: true, // Return updated document
//       runValidators: true, // Validate fields before update
//     });

//     if (!updatedPatient) {
//       return res.status(404).json({ message: "Patient not found" });
//     }

//     res.json({ message: "Patient updated successfully", updatedPatient });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating patient data", error });
//   }
// };


const Patient = require('../models/patientModel');

// ✅ POST request to fetch user by email
const getPatientByEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const patient = await Patient.findOne({ email });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json(patient);
  } catch (error) {
    console.error('Error fetching patient by email:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// ✅ POST request to add an appointment
const addAppointment = async (req, res) => {
  const { email, appointment } = req.body;

  try {
    // Patient exist karta hai?
    const patient = await Patient.findOne({ email });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    // Direct update (no version issue)
    const updatedPatient = await Patient.findOneAndUpdate(
      { email },
      { $push: { upcomingAppointments: appointment } },
      { new: true }
    );

    res.status(200).json({
      message: 'Appointment added successfully',
      patient: updatedPatient
    });

  } catch (error) {
    console.error('Error adding appointment:', error);
    res.status(500).json({ message: 'Error adding appointment' });
  }
};

module.exports = { getPatientByEmail , addAppointment};