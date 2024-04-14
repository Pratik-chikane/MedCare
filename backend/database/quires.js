//Quries for Postgre DB

exports.getDoctorByEmail = "SELECT * FROM doctor WHERE email = $1";

exports.registerDoctor =
  "INSERT INTO doctor (name, specialization, experience, email, password)VALUES ($1, $2, $3, $4, $5) RETURNING *";
exports.insertPatient =
  "INSERT INTO patient (did,name, age, phone_number, blood_group, allergies, medical_condition, vaccinations, symptoms, current_diagnosis) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,$10)";

exports.getPatientByDoctorId =
  "SELECT id,name, age, phone_number, blood_group, allergies, medical_condition, vaccinations, symptoms, current_diagnosis FROM patient WHERE did = $1";

exports.getPatientById =
  "SELECT id,name, age, phone_number, blood_group, allergies, medical_condition, vaccinations, symptoms, current_diagnosis FROM patient WHERE id = $1";

exports.getMedicationById =
  "SELECT id,name, dosage, frequency FROM medication WHERE id = $1";

exports.addMedication =
  "INSERT INTO medication (pid, name, dosage, frequency) VALUES ($1, $2, $3, $4)";

exports.getMedication =
  "SELECT id,name, dosage, frequency FROM medication WHERE pid = $1";

exports.updateMedication =
  "UPDATE medication SET name = $2, dosage = $3, frequency = $4 WHERE id = $1";

exports.updatePatient =
  "UPDATE patient SET name = $1, age = $2, phone_number = $3, blood_group = $4,allergies = $5,medical_condition = $6,vaccinations = $7,symptoms = $8,current_diagnosis = $9 WHERE id = $10";

exports.deleteMedication = "DELETE FROM medication WHERE id = $1";

exports.deletePatient = "DELETE FROM patient WHERE id = $1";
