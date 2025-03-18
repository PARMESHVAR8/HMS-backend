const Patient = require('../models/patientModel');
const Doctor = require('../models/doctorModel');
const {
    Nurse,
    Receptionist,
    Chemist,
    Registrar,
    PaymentHandler,
    SecurityGuard,
    Housekeeping,
    MortuaryStaff,
    AmbulanceStaff,
    CanteenStaff,
    Assistant,
    InstrumentHandler,
    InsuranceHandler
  } = require('../models/staffModel');
  
// Add a new patient
exports.addPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save();
    res.status(201).json({ message: 'Patient added successfully', data: savedPatient });
  } catch (error) {
    res.status(500).json({ message: 'Error adding patient', error });
  }
};

// Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patients', error });
  }
};

// Update an existing patient
exports.updatePatient = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json({ message: 'Patient updated successfully', data: updatedPatient });
  } catch (error) {
    res.status(500).json({ message: 'Error updating patient', error });
  }
};

// Delete a patient
exports.deletePatient = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPatient = await Patient.findByIdAndDelete(id);
    if (!deletedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json({ message: 'Patient deleted successfully', data: deletedPatient });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting patient', error });
  }
};



// Get all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctors', error });
  }
};

// Add a new doctor
exports.addDoctor = async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (error) {
    res.status(400).json({ message: 'Error adding doctor', error });
  }
};

// Modify an existing doctor by ID
exports.modifyDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const updatedDoctor = await Doctor.findByIdAndUpdate(doctorId, req.body, { new: true });
    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(updatedDoctor);
  } catch (error) {
    res.status(400).json({ message: 'Error updating doctor', error });
  }
};

// Delete a doctor by ID
exports.deleteDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const deletedDoctor = await Doctor.findByIdAndDelete(doctorId);
    if (!deletedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting doctor', error });
  }
};




  // GET All Staff (combine sab ko ek array me bhejega)
  exports.getAllStaff = async (req, res) => {
    try {
      const nurses = await Nurse.find({});
      const receptionists = await Receptionist.find({});
      const chemists = await Chemist.find({});
      const registrars = await Registrar.find({});
      const paymentHandlers = await PaymentHandler.find({});
      const securityGuards = await SecurityGuard.find({});
      const housekeepings = await Housekeeping.find({});
      const mortuaryStaff = await MortuaryStaff.find({});
      const ambulanceStaff = await AmbulanceStaff.find({});
      const canteenStaff = await CanteenStaff.find({});
      const assistants = await Assistant.find({});
      const instrumentHandlers = await InstrumentHandler.find({});
      const insuranceHandlers = await InsuranceHandler.find({});
  
      res.json({
        nurses,
        receptionists,
        chemists,
        registrars,
        paymentHandlers,
        securityGuards,
        housekeepings,
        mortuaryStaff,
        ambulanceStaff,
        canteenStaff,
        assistants,
        instrumentHandlers,
        insuranceHandlers
      });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching staff', error });
    }
  };
  
  // ADD New Staff (example Nurse)
  exports.addNurse = async (req, res) => {
    try {
      const newNurse = new Nurse(req.body);
      await newNurse.save();
      res.status(201).json({ message: 'Nurse added successfully', nurse: newNurse });
    } catch (error) {
      res.status(400).json({ message: 'Error adding nurse', error });
    }
  };
  
  // MODIFY Nurse by ID
  exports.modifyNurse = async (req, res) => {
    try {
      const nurseId = req.params.id;
      const updatedNurse = await Nurse.findByIdAndUpdate(nurseId, req.body, { new: true });
      if (!updatedNurse) {
        return res.status(404).json({ message: 'Nurse not found' });
      }
      res.json({ message: 'Nurse updated successfully', nurse: updatedNurse });
    } catch (error) {
      res.status(400).json({ message: 'Error updating nurse', error });
    }
  };
  
  // DELETE Nurse by ID
  exports.deleteNurse = async (req, res) => {
    try {
      const nurseId = req.params.id;
      const deletedNurse = await Nurse.findByIdAndDelete(nurseId);
      if (!deletedNurse) {
        return res.status(404).json({ message: 'Nurse not found' });
      }
      res.json({ message: 'Nurse deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error deleting nurse', error });
    }
  };