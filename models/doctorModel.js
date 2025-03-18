const mongoose = require('mongoose');

// ====== Sub-schemas ======

// Attendance schema
const attendanceSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['Present', 'Absent', 'On Leave'], default: 'Present' },
  shift: { type: String, enum: ['Morning', 'Evening', 'Night'] }
});

// Notice schema
const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now }
});

// Meeting schema
const meetingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  agenda: { type: String },
  meetingDate: { type: Date, required: true },
  time: { type: String },
  location: { type: String }
});

// Bonus schema
const bonusSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  reason: { type: String },
  date: { type: Date, default: Date.now }
});

// Salary schema
const salarySchema = new mongoose.Schema({
  month: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['Paid', 'Pending'], default: 'Paid' }
});

// Holidays schema
const holidaySchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String }
});

// Achievements schema
const achievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now }
});

// Annual report schema
const annualReportSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  summary: { type: String },
  patientTreated: { type: Number },
  surgeriesPerformed: { type: Number },
  successRate: { type: String }
});

// Nurse or staff acquired schema
const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true }, // e.g., Nurse, Assistant
  contact: { type: String },
  assignedDate: { type: Date, default: Date.now }
});

// Operation Theater acquired schema
const otSchema = new mongoose.Schema({
  otNumber: { type: String, required: true },
  surgeryName: { type: String },
  patientName: { type: String },
  date: { type: Date, required: true },
  time: { type: String }
});

// Appointment schema (with patient reference)
const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  reason: { type: String },
  status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' }
});

// ====== Main Doctor Schema ======

const doctorSchema = new mongoose.Schema({
  // Basic Details
  name: { type: String, required: true },
  email: { type: String, unique: true },
  contactNumber: { type: String },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  profilePicture: { type: String },

  // Medical Qualification
  qualifications: [String], // ["MBBS", "MD Cardiology"]

  // Department
  departmentName: { type: String, required: true },

  // License Number
  licenseNumber: { type: String, required: true, unique: true },

  // Timing
  timings: {
    startTime: { type: String }, // e.g., "09:00 AM"
    endTime: { type: String }    // e.g., "05:00 PM"
  },

  // Cabin
  cabinNumber: { type: String },

  // Appointments
  todaysAppointments: [appointmentSchema],
  appointmentHistory: [appointmentSchema],

  // Attendance
  attendanceRecords: [attendanceSchema],

  // Notices
  notices: [noticeSchema],

  // Meetings
  todaysMeetings: [meetingSchema],

  // Salary & Bonus
  salaryDetails: [salarySchema],
  bonusReceived: [bonusSchema],

  // Holidays
  holidaysList: [holidaySchema],

  // Achievements
  achievements: [achievementSchema],

  // Annual Reports
  annualReports: [annualReportSchema],

  // Nurse or Staff assigned
  staffAcquired: [staffSchema],

  // Operation Theater assigned
  otAcquired: [otSchema]

}, {
  timestamps: true // Automatically adds createdAt & updatedAt
});

module.exports = mongoose.model('Doctor', doctorSchema);