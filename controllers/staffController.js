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
  
  // ======= Add Staff Controller =======
  const addStaff = async (req, res) => {
    const { staffType, data } = req.body;
  
    try {
      let StaffModel;
  
      // Choose model based on staff type
      switch (staffType) {
        case 'Nurse':
          StaffModel = Nurse;
          break;
        case 'Receptionist':
          StaffModel = Receptionist;
          break;
        case 'Chemist':
          StaffModel = Chemist;
          break;
        case 'Registrar':
          StaffModel = Registrar;
          break;
        case 'PaymentHandler':
          StaffModel = PaymentHandler;
          break;
        case 'SecurityGuard':
          StaffModel = SecurityGuard;
          break;
        case 'Housekeeping':
          StaffModel = Housekeeping;
          break;
        case 'MortuaryStaff':
          StaffModel = MortuaryStaff;
          break;
        case 'AmbulanceStaff':
          StaffModel = AmbulanceStaff;
          break;
        case 'CanteenStaff':
          StaffModel = CanteenStaff;
          break;
        case 'Assistant':
          StaffModel = Assistant;
          break;
        case 'InstrumentHandler':
          StaffModel = InstrumentHandler;
          break;
        case 'InsuranceHandler':
          StaffModel = InsuranceHandler;
          break;
        default:
          return res.status(400).json({ message: 'Invalid staff type!' });
      }
  
      const newStaff = new StaffModel(data);
      await newStaff.save();
  
      res.status(201).json({ message: `${staffType} added successfully!`, staff: newStaff });
  
    } catch (error) {
      console.error('Error adding staff:', error);
      res.status(500).json({ message: 'Something went wrong', error });
    }
  };
  
  // ======= Get Staff by Email Controller =======
  const getStaffByEmail = async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
  
    try {
      const queries = [
        Nurse.findOne({ email }),
        Receptionist.findOne({ email }),
        Chemist.findOne({ email }),
        Registrar.findOne({ email }),
        PaymentHandler.findOne({ email }),
        SecurityGuard.findOne({ email }),
        Housekeeping.findOne({ email }),
        MortuaryStaff.findOne({ email }),
        AmbulanceStaff.findOne({ email }),
        CanteenStaff.findOne({ email }),
        Assistant.findOne({ email }),
        InstrumentHandler.findOne({ email }),
        InsuranceHandler.findOne({ email }),
      ];
  
      const results = await Promise.all(queries);
  
      const staffData = results.find(result => result !== null);
  
      if (!staffData) {
        return res.status(404).json({ message: 'Staff not found with this email' });
      }
  
      res.status(200).json({ staff: staffData });
  
    } catch (error) {
      console.error('Error fetching staff:', error);
      res.status(500).json({ message: 'Something went wrong', error });
    }
  };
  
  
  module.exports = {
    addStaff,
    getStaffByEmail
  };