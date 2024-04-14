import React, { useEffect, useState, useRef } from "react";
import { Button, Grid, Avatar, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Input from "@mui/material/Input";
import {
  addMedicationToPatient,
  deleteMedicationById,
  getMedicationById,
  getMedicationsOfPatient,
  getPatientById,
  updateMedicationById,
} from "../services/DoctorService";


// PatientPage which will show patient details also can add 
// and view medications for patients

const PatientPage = () => {
  const formRef = useRef(null);
  const [patient, setPatient] = useState();
  const [medicationId, setmedicationId] = useState();
  const [medications, setMedications] = useState([]);
  const { id } = useParams();

  const handleToast = (success, message) => {
    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const medData = {
      name: data.get("name"),
      frequency: data.get("frequency"),
      dosage: data.get("dosage"),
    };
    try {
      const existingMedication = await getMedicationById(medicationId);

      if (existingMedication) {
        const { success, message } = await updateMedicationById(
          medicationId,
          medData
        );
        if (success) {
          formRef.current.reset();
          fetchPatient();
        }
        handleToast(success, message);
      } else {
        const { success, message } = await addMedicationToPatient(id, medData);
        if (success) {
          formRef.current.reset();
          fetchPatient();
        }
        handleToast(success, message);
      }
    } catch (error) {
      toast.error("An error occurred while processing your request.");
    }
  };

  const handleEdit = async (id) => {
    setmedicationId(id);
    try {
      const medication = await getMedicationById(id);
      formRef.current.name.value = medication.name;
      formRef.current.dosage.value = medication.dosage;
      formRef.current.frequency.value = medication.frequency;
    } catch (error) {
      console.error("Error fetching medication details:", error);
    }
  };
  const handleDelete = async (mid) => {
    try {
      const { success, message } = await deleteMedicationById(mid);
      if (success) {
        setMedications((prevMedications) =>
        prevMedications.filter((med) => med.id !== mid)
        );
      }
      handleToast(success, message);
    } catch (error) {
      toast.error("Error deleting medication");
    }
  };
  const fetchPatient = async () => {
    try {
      const patient = await getPatientById(id);
      const medications = await getMedicationsOfPatient(id);
      setMedications(medications);
      setPatient(patient);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };
  useEffect(() => {
    fetchPatient();
  }, [id]);
  return (
    <div>
      <div className="p-10 md:p-20  min-h-[110vh] bg-gradient-to-br from-purple-50 via-orange-50 to-transparent">
        <Toaster />
        <Grid item xs={12} md={6} className="pb-10 ">
          <div className="shadow-md shadow-gray-600 p-6 bg-white">
            <p className="font-bold">Patient Details</p>
          </div>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} md={5}>
            <div className="shadow-lg shadow-gray-600 p-6 flex flex-col md:flex-row bg-white">
              <div className="max w-[4rem] max h-[20rem] justify-center items-center">
                <Avatar
                  className="pt-5"
                  sx={{ width: 70, height: 70 }}
                  alt="profile"
                  src="data:image/png;base64,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"
                />
              </div>
              <div className=" bg-white p-3 items-center justify-center space-y-2">
                <div>
                  <p className="font-bold text-xl py-1 ">
                    Name: {patient?.name}
                  </p>
                  <p className="font-semibold text-lg my-1">
                    Medical Condition : {patient?.medical_condition}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <p className="font-medium text-lg">Age : {patient?.age}</p>
                  <p className="ml-3 text-lg font-medium ">
                    | Blood Group : {patient?.blood_group}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-medium">
                    Current Diagnosis : {patient?.current_diagnosis}
                  </p>
                  <p className="text-lg font-medium">
                    Vaccinations : {patient?.vaccinations}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <p className="font-medium text-lg">
                      Symptoms : {patient?.symptoms}
                    </p>
                    <p className="ml-3 text-lg font-medium ">
                      | Allergies : {patient?.allergies}
                    </p>
                  </div>
                  <p className="text-lg font-medium">
                    Phone Number : {patient?.phone_number}
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid>
              <div className="shadow-lg shadow-gray-600 p-6 bg-white">
                <div>
                  <div className="px-4">
                    <p className="font-semibold mb-2">Add Medication</p>
                    <div className="flex flex-row">
                      <form
                        onSubmit={handleSubmit}
                        ref={formRef}
                        className="flex flex-row space-x-4"
                      >
                        <div>
                          <TextField
                            required
                            id="name"
                            name="name"
                            defaultValue=" "
                            label="Name"
                          />
                        </div>
                        <div>
                          <TextField
                            required
                            id="dosage"
                            name="dosage"
                            label="Dosage"
                            defaultValue=" "
                          />
                        </div>
                        <div>
                          <TextField
                            required
                            id="frequency"
                            name="frequency"
                            label="Frequency"
                            defaultValue=" "
                          />
                        </div>

                        <div className="flex items-center">
                          <Button
                            className="bg-[#9155FD] w-20"
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ padding: "0.8rem 0", bgcolor: "#9155FD" }}
                          >
                            Save
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid>
              <div className="shadow-lg shadow-gray-600 p-6 mt-8 bg-white">
                <div>
                  <div className="px-4">
                    <p className="font-semibold mb-4">View All Medication</p>
                    <hr />
                    {medications && medications.length > 0 ? (
                      medications.map((medication) => (
                        <div className="pt-3 pl-2">
                          <div className="flex flex-row justify-between">
                            <div style={{ minWidth: "100px" }}>
                              <p>{medication?.name}</p>
                            </div>
                            <div style={{ minWidth: "100px" }}>
                              <p>{medication?.dosage}</p>
                            </div>
                            <div style={{ minWidth: "100px" }}>
                              <p>{medication?.frequency}</p>
                            </div>
                            <div style={{ minWidth: "30px" }}>
                              <Button
                                type="submit"
                                variant="contained"
                                size="small"
                                color="success"
                                sx={{ padding: "0.2rem " }}
                                onClick={() => handleEdit(medication?.id)}
                              >
                                Edit
                              </Button>
                            </div>
                            <div style={{ minWidth: "30px" }}>
                              <Button
                                type="submit"
                                variant="contained"
                                size="small"
                                color="error"
                                onClick={() => handleDelete(medication?.id)}
                                sx={{ padding: "0.2rem " }}
                              >
                                Delete
                              </Button>
                            </div>
                            <hr />
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="font-bold text-2xl py-10">
                        No medication are added.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PatientPage;
