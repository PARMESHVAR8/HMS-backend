const Doctor = require('../models/doctorModel');

// ✅ Get Doctor by Email
const getDoctorByEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json(doctor);
  } catch (error) {
    console.error('Error fetching doctor by email:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// ✅ Add Today's Appointment
const addTodaysAppointment = async (req, res) => {
  const { email, appointment } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    doctor.todaysAppointments.push(appointment);
    doctor.appointmentHistory.push(appointment);
    await doctor.save();

    res.status(200).json({
      message: 'Appointment added successfully',
      doctor
    });
  } catch (error) {
    console.error('Error adding appointment:', error);
    res.status(500).json({ message: 'Error adding appointment' });
  }
};

// ✅ Mark Attendance
const markAttendance = async (req, res) => {
  const { email, attendance } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    doctor.attendanceRecords.push(attendance);
    await doctor.save();

    res.status(200).json({
      message: 'Attendance marked successfully',
      doctor
    });
  } catch (error) {
    console.error('Error marking attendance:', error);
    res.status(500).json({ message: 'Error marking attendance' });
  }
};

// ✅ Add Bonus
const addBonus = async (req, res) => {
  const { email, bonus } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    doctor.bonusReceived.push(bonus);
    await doctor.save();

    res.status(200).json({
      message: 'Bonus added successfully',
      doctor
    });
  } catch (error) {
    console.error('Error adding bonus:', error);
    res.status(500).json({ message: 'Error adding bonus' });
  }
};

// ✅ Add Salary
const addSalary = async (req, res) => {
  const { email, salary } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    doctor.salaryDetails.push(salary);
    await doctor.save();

    res.status(200).json({
      message: 'Salary added successfully',
      doctor
    });
  } catch (error) {
    console.error('Error adding salary:', error);
    res.status(500).json({ message: 'Error adding salary' });
  }
};

// ✅ Add Achievement
const addAchievement = async (req, res) => {
  const { email, achievement } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    doctor.achievements.push(achievement);
    await doctor.save();

    res.status(200).json({
      message: 'Achievement added successfully',
      doctor
    });
  } catch (error) {
    console.error('Error adding achievement:', error);
    res.status(500).json({ message: 'Error adding achievement' });
  }
};

// ✅ Add Annual Report
const addAnnualReport = async (req, res) => {
  const { email, report } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    doctor.annualReports.push(report);
    await doctor.save();

    res.status(200).json({
      message: 'Annual report added successfully',
      doctor
    });
  } catch (error) {
    console.error('Error adding annual report:', error);
    res.status(500).json({ message: 'Error adding annual report' });
  }
};

// ✅ Add Staff to Doctor
const addStaff = async (req, res) => {
  const { email, staff } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    doctor.staffAcquired.push(staff);
    await doctor.save();

    res.status(200).json({
      message: 'Staff assigned successfully',
      doctor
    });
  } catch (error) {
    console.error('Error assigning staff:', error);
    res.status(500).json({ message: 'Error assigning staff' });
  }
};

// ✅ Assign Operation Theater (OT)
const assignOT = async (req, res) => {
  const { email, ot } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    doctor.otAcquired.push(ot);
    await doctor.save();

    res.status(200).json({
      message: 'OT assigned successfully',
      doctor
    });
  } catch (error) {
    console.error('Error assigning OT:', error);
    res.status(500).json({ message: 'Error assigning OT' });
  }
};

module.exports = {
  getDoctorByEmail,
  addTodaysAppointment,
  markAttendance,
  addBonus,
  addSalary,
  addAchievement,
  addAnnualReport,
  addStaff,
  assignOT
};