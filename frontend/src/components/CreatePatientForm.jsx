import React from "react";
import {
  Grid,
} from "@mui/material";
import PatientForm from "./PatientForm";
import { registerPatient } from "../services/DoctorService";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


// CreatePatientForm to create patient which is reusing PatientForm component
const CreatePatientForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (formData) => {

    console.log(localStorage.getItem("jwt"));
    const { success, message } = await registerPatient(formData);

    if (success) {
      toast.success(message);
      navigate("/patients");
    } else {
      toast.error(message);
    }
  };
  return (
    <div className="pb-20  min-h-[110vh] bg-gradient-to-br from-purple-50 via-orange-50 to-transparent">
      <Toaster />
      <Grid item xs={12} md={6} className="p-12">
        <div className="shadow-md shadow-gray-600 p-6 bg-white">
          <p className="font-bold text-xl">Add Patient</p>
        </div>
      </Grid>
      <PatientForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePatientForm;
