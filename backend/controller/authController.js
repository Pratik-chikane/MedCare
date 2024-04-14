const pool = require("../database/connection");
const quries = require("../database/quires");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwtToken");


//Service logic fpr registration and login 

exports.registerDoctor = async (req, res) => {
  const { email, name, password, experience, specialization } = req.body;
  try {
    const existingDoctor = await pool.query(quries.getDoctorByEmail, [email]);

    if (existingDoctor.rows.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newDoctor = await pool.query(quries.registerDoctor, [
        name,
        specialization,
        experience,
        email,
        hashedPassword,
      ]);
      const doctorData = newDoctor.rows[0];
      const { id } = doctorData;
      const doctorEmail = doctorData.email;
      const token = generateToken({
        id,
        doctorEmail,
      });
      res
        .status(201)
        .json({ token, message: "Doctor registered successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.loginDoctor = async (req, res) => {
  const { email, password } = req.body;

  try {
    const doctor = await pool.query(quries.getDoctorByEmail, [email]);
    if (doctor.rows.length === 0) {
      return res.status(404).json("Doctor not found with this email");
    }
    const match = await bcrypt.compare(password, doctor.rows[0].password);

    if (match) {
      const token = generateToken({ id: doctor.rows[0].id });
      res.status(200).json({ token, message: "Authentication successfull" });
    } else {
      res.status(401).json({ message: "Authentication failed" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
