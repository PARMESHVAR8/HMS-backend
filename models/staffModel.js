const mongoose = require('mongoose');

// ====== Common Basic Details Schema for All Staff ======
const staffBasicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String},
  department: { type: String, required: true },
  profilePhoto: { type: String },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  contactNumber: { type: String },
  address: { type: String },
  entryTime: { type: String }, // HH:MM AM/PM
  exitTime: { type: String },  // HH:MM AM/PM
}, { _id: false });

// ====== Nurse Schema ======
const nurseSchema = new mongoose.Schema({
  ...staffBasicSchema.obj,
  opdAssigned: { type: String }, // OPD ward/number they handle
  doctorsAssigned: [{ type: String }], // Array of doctor names or ids
  patientsAssigned: [{ type: String }] // Array of patient names or ids
});

// ====== Receptionist Schema ======
const receptionistSchema = new mongoose.Schema({
  ...staffBasicSchema.obj,
  frontDesk: { type: String }, // e.g., "Main Desk", "Emergency Desk"
  tasks: [String], // e.g., ["Patient Registration", "Appointment Scheduling"]
  shift: { type: String, enum: ['Morning', 'Evening', 'Night'] }
});

// ====== Chemist (Medicine Handler) Schema ======
const chemistSchema = new mongoose.Schema({
  ...staffBasicSchema.obj,
  medicinesHandled: [{ 
    name: { type: String },
    quantity: { type: Number },
    expiryDate: { type: Date }
  }],
  storeLocation: { type: String } // e.g., "Pharmacy Block A"
});

// ====== Registrar Schema ======
const registrarSchema = new mongoose.Schema({
  ...staffBasicSchema.obj,
  recordsMaintained: [String], // ["Birth Records", "Death Certificates", "Admission Registers"]
  systemUsed: { type: String } // e.g., "MedSys v2.0"
});

// ====== Payment Handler Schema ======
const paymentHandlerSchema = new mongoose.Schema({
  ...staffBasicSchema.obj,
  paymentCounters: [{ type: String }], // e.g., ["Billing", "Insurance Claim"]
  totalCollectedToday: { type: Number, default: 0 },
  shift: { type: String }
});

// ====== Security Guard Schema ======
const securityGuardSchema = new mongoose.Schema({
  ...staffBasicSchema.obj,
  postLocation: { type: String }, // e.g., "Gate 1", "Emergency Ward"
  dutyShift: { type: String, enum: ['Morning', 'Evening', 'Night'] },
  equipments: [String] // ["Walkie-Talkie", "Torch"]
});

// ====== Housekeeping Staff Schema ======
const housekeepingSchema = new mongoose.Schema({
  ...staffBasicSchema.obj,
  areasAssigned: [{ type: String }], // ["ICU", "OPD", "Corridor"]
  cleaningShift: { type: String }
});

// ====== Mortuary/Body Handler Schema ======
const mortuaryStaffSchema = new mongoose.Schema({
  ...staffBasicSchema.obj,
  bodyPickupAreas: [String], // ["ICU", "Emergency Ward"]
  transportVehicle: { type: String }, // "Van #4"
  responsibilities: [String] // ["Transport", "Documentation"]
});

// ====== Ambulance Staff Schema ======
const ambulanceStaffSchema = new mongoose.Schema({
  ...staffBasicSchema.obj,
  ambulanceNumber: { type: String },
  driverName: { type: String },
  routes: [{ type: String }], // "City Hospital to XYZ Center"
  emergencyLevel: { type: String } // "Basic", "ICU Support", "Cardiac Support"
});

// ====== Canteen Staff Schema ======
const canteenStaffSchema = new mongoose.Schema({
  ...staffBasicSchema.obj,
  canteenArea: { type: String },
  menuHandled: [String], // ["Breakfast", "Lunch", "Snacks"]
  shift: { type: String }
});

// ====== Assistants Schema ======
const assistantSchema = new mongoose.Schema({
  ...staffBasicSchema.obj,
  doctorAssigned: { type: String },
  tasks: [String], // ["File Management", "Vitals Check", "Patient Escort"]
});

// ====== Instrument Handler (CT Scan etc.) Schema ======
const instrumentHandlerSchema = new mongoose.Schema({
  ...staffBasicSchema.obj,
  machinesHandled: [String], // ["CT Scan", "MRI", "X-Ray"]
  certifications: [String], // ["Radiology Training", "Safety Protocols"]
  shift: { type: String }
});

// ====== Insurance & Policy Handler Schema ======
const insuranceHandlerSchema = new mongoose.Schema({
  ...staffBasicSchema.obj,
  policiesManaged: [String], // ["Health Insurance", "Cashless Claims"]
  companiesTieUp: [String], // ["ICICI", "HDFC Ergo"]
  deskLocation: { type: String } // "Ground Floor Helpdesk"
});


// ====== Export All Staff Models ======
const Nurse = mongoose.model('Nurse', nurseSchema);
const Receptionist = mongoose.model('Receptionist', receptionistSchema);
const Chemist = mongoose.model('Chemist', chemistSchema);
const Registrar = mongoose.model('Registrar', registrarSchema);
const PaymentHandler = mongoose.model('PaymentHandler', paymentHandlerSchema);
const SecurityGuard = mongoose.model('SecurityGuard', securityGuardSchema);
const Housekeeping = mongoose.model('Housekeeping', housekeepingSchema);
const MortuaryStaff = mongoose.model('MortuaryStaff', mortuaryStaffSchema);
const AmbulanceStaff = mongoose.model('AmbulanceStaff', ambulanceStaffSchema);
const CanteenStaff = mongoose.model('CanteenStaff', canteenStaffSchema);
const Assistant = mongoose.model('Assistant', assistantSchema);
const InstrumentHandler = mongoose.model('InstrumentHandler', instrumentHandlerSchema);
const InsuranceHandler = mongoose.model('InsuranceHandler', insuranceHandlerSchema);

module.exports = {
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
};