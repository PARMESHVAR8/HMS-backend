require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoute");
const patientRoute = require("./routes/patientRoutes");
const doctorRoute = require("./routes/doctorRoutes");
const pushNoticeRoute = require("./routes/pushNoticeRoutes");
const staffRoute = require("./routes/staffRoutes");
const adminRoute = require("./routes/adminRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use('/api/patient', patientRoute);
app.use('/api/notice', pushNoticeRoute);
app.use('/api/doctor', doctorRoute);
app.use('/api/staff', staffRoute);
app.use('/api/admin', adminRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
