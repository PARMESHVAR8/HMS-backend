// const mongoose = require("mongoose");

// const patientSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   contactNumber: { type: String, required: true },
//   age: { type: Number, required: true },
//   gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
//   bloodGroup: { type: String, required: true },
//   patientID: { type: String, unique: true, required: true },
// });

// const Patient = mongoose.model("Patient", patientSchema);
// module.exports = Patient;
const mongoose = require('mongoose');



const noticeSchema = new mongoose.Schema({

  title: { type: String, required: true },

  shortDescription: { type: String, required: true },

  longDescription: { type: String, required: true },

  link: { type: String },

  date: { type: Date, default: Date.now }

});

const appointmentSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  doctorName: { type: String, required: true },
  status: { type: String, enum: ['Confirmed', 'Pending', 'Cancelled'], default: 'Pending' },
  reasonForVisit: { type: String },
  notes: { type: String }
});

const prescribedMedicineSchema = new mongoose.Schema({
  medicineName: { type: String, required: true },
  dosage: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  prescribedBy: { type: String, required: true }
});

const reportSchema = new mongoose.Schema({
  type: { type: String }, // e.g., Lab Report, MRI, etc.
  fileUrl: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String }
});

const paymentHistorySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  service: { type: String, required: true },
  amountPaid: { type: Number, required: true },
  invoiceUrl: { type: String }
});

const vitalsSchema = new mongoose.Schema({
  bp: { type: String },            // Blood Pressure
  sugarLevel: { type: String },    // Sugar Level
  weight: { type: String },        // Weight
  date: { type: Date }
});

const patientSchema = new mongoose.Schema({
  // Patient Profile Section
  name: { type: String, required: true },
  email: { type: String },
  contactNumber: { type: String },
  age: { type: Number },
  gender: { type: String },
  bloodGroup: { type: String },
  patientId: { type: String, unique: true, required: true },
  registrationDate: { type: Date, default: Date.now },
  notices: [noticeSchema],
  profilePicture: { type: String },

  // Assigned Doctor Info
  assignedDoctor: {
    doctorName: { type: String, required: true },
    specialization: { type: String },
    clinicHospital: { type: String },
    nextAppointment: { type: Date },
    doctorContact: { type: String }
  },

  // Appointments
  upcomingAppointments: [appointmentSchema],
  appointmentHistory: [appointmentSchema],

  // Medicines
  prescribedMedicines: [prescribedMedicineSchema],
  currentlyTaking: [String], // e.g., ["Metformin 500mg", "Atorvastatin 10mg"]

  // Medical History / Reports
  pastDiagnoses: [String],
  surgeryHistory: [String],
  reports: [reportSchema],

  // Health Vitals
  healthVitals: [vitalsSchema],

  // Notifications & Reminders
  notifications: {
    nextAppointmentReminder: { type: Boolean, default: false },
    medicineRefillAlert: { type: Boolean, default: false },
    newReportUploaded: { type: Boolean, default: false }
  },

  // Billing / Payment History
  paymentHistory: [paymentHistorySchema]
}, {
  timestamps: true // auto adds createdAt & updatedAt
});

module.exports = mongoose.model('Patient', patientSchema);