const Patient = require('../models/patientModel');

const pushNotice = async (req, res) => {
  const { email, title, shortDescription, longDescription, link } = req.body;

  try {
    const newNotice = {
      title,
      shortDescription,
      longDescription,
      link
    };

    const updatedPatient = await Patient.findOneAndUpdate(
      { email },
      { $push: { notices: newNotice } },
      { new: true } // return updated document
    );

    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json({ message: 'Notice pushed successfully!', notice: newNotice });

  } catch (error) {
    console.error('Error pushing notice:', error);
    res.status(500).json({ message: 'Error pushing notice' });
  }
};

module.exports = { pushNotice };