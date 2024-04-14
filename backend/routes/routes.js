const express = require("express");
const { registerDoctor, loginDoctor } = require("../controller/authController");
const router = express.Router();
const { validateToken } = require("../middleware/authMiddleware");
const {
  addPatient,
  getPatients,
  getPatientById,
  getAllMedicationOfPatient,
  addMedicationForPatient,
  updateMedication,
  updatePatient,
  getMedicationById,
  deleteMedicationById,
  deletePatientById,
} = require("../controller/doctorController");

router
  .post("/register", registerDoctor)
  .post("/login", loginDoctor)
  .post("/patient/create", validateToken, addPatient)
  .get("/patients", validateToken, getPatients)
  .get("/patient/:id", validateToken, getPatientById)
  .get("/medication/:id", validateToken, getMedicationById)
  .get("/medications/:id", validateToken, getAllMedicationOfPatient)
  .post("/medication/add/:id", validateToken, addMedicationForPatient)
  .put("/medication/update/:id", validateToken, updateMedication)
  .put("/patient/update/:id", validateToken, updatePatient)
  .delete("/medication/delete/:id", validateToken, deleteMedicationById)
  .delete("/patient/delete/:id", validateToken, deletePatientById)
  
exports.router = router;
