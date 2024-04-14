const pool = require("../database/connection");
const quries = require("../database/quires");

exports.addPatient = async (req, res) => {
  const {
    name,
    age,
    phone_number,
    blood_group,
    allergies,
    medical_condition,
    vaccinations,
    symptoms,
    current_diagnosis,
  } = req.body;

  pool
    .query(quries.insertPatient, [
      req.did,
      name,
      age,
      phone_number,
      blood_group,
      allergies,
      medical_condition,
      vaccinations,
      symptoms,
      current_diagnosis,
    ])
    .then(() => {
      res.status(200).json({ message: "Patient inserted successfully" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};
exports.getPatients = async (req, res) => {
  const did = req.did;

  try {
    const { rows } = await pool.query(quries.getPatientByDoctorId, [did]);
    res.status(200).json({ patients: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPatientById = async (req, res) => {
  const pid = req.params.id;
  try {
    const patient = await pool.query(quries.getPatientById, [pid]);
    res.status(200).json({ patient: patient.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getMedicationById = async (req, res) => {
  const pid = req.params.id;
  try {
    const medication = await pool.query(quries.getMedicationById, [pid]);
    res.status(200).json({ medication: medication.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllMedicationOfPatient = async (req, res) => {
  const pid = req.params.id;
  try {
    const { rows } = await pool.query(quries.getMedication, [pid]);
    res.status(200).json({ medications: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.addMedicationForPatient = async (req, res) => {
  const { name, dosage, frequency } = req.body;
  const pid = req.params.id;

  try {
    const medication = await pool.query(quries.addMedication, [
      pid,
      name,
      dosage,
      frequency,
    ]);
    res.status(200).json({ message: "Medication added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMedication = async (req, res) => {
  const { name, dosage, frequency } = req.body;
  const pid = req.params.id;

  try {
    const medication = await pool.query(quries.updateMedication, [
      pid,
      name,
      dosage,
      frequency,
    ]);
    res.status(200).json({ message: "Medication updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updatePatient = async (req, res) => {
  const id = req.params.id;
  const age = parseInt(req.body.age);
  const {
    name,
    phone_number,
    blood_group,
    allergies,
    medical_condition,
    vaccinations,
    symptoms,
    current_diagnosis,
  } = req.body;

  pool
    .query(quries.updatePatient, [
      name,
      age,
      phone_number,
      blood_group,
      allergies,
      medical_condition,
      vaccinations,
      symptoms,
      current_diagnosis,
      id,
    ])
    .then(() => {
      res.status(200).json({ message: "Patient updated successfully" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};
exports.deleteMedicationById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query(quries.deleteMedication, [id]);
    res.status(200).json({ message: "medication Deleted SuccessFully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.deletePatientById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query(quries.deletePatient, [id]);
    res.status(200).json({ message: "Patient Deleted SuccessFully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
