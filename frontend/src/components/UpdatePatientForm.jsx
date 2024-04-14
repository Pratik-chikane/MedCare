import React, { useEffect, useState } from "react";
import PatientForm from "./PatientForm";
import { Grid } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { getPatientById, updatePatient } from "../services/DoctorService";
import toast, { Toaster } from "react-hot-toast";

// updatePatientform to update the patient details
const UpdatePatientForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState();

  const handleSubmit = async (formData) => {
    try {
      const { success, message } = await updatePatient(id, formData);
      if (success) {
        toast.success(message);
        navigate("/patients");
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  useEffect(() => {
    const fetchInitialValues = async () => {
      try {
        const patient = await getPatientById(id);
        setInitialValues(patient);
      } catch (error) {
        console.error("Error fetching initial patient data:", error);
      }
    };
    fetchInitialValues();
  }, [id]);

  return (
    <div className="pb-20  min-h-[110vh] bg-gradient-to-br from-purple-50 via-orange-50 to-transparent">
      <Toaster />
      <Grid item xs={12} md={6} className="p-12">
        <div className="shadow-md shadow-gray-600 p-6 bg-white">
          <p className="font-bold text-xl">Update Patient</p>
        </div>
      </Grid>

      {initialValues && (
        <PatientForm onSubmit={handleSubmit} initialValues={initialValues} />
      )}
    </div>
  );
};

export default UpdatePatientForm;
