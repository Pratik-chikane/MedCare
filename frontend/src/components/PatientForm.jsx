import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField } from "@mui/material";
const PatientForm = ({ onSubmit, initialValues }) => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    formRef.current.reset();

    onSubmit(formDataObj);
  };
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="px-10 md:px-52">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Patient Name"
              name="name"
              className="bg-white"
              defaultValue={initialValues ? initialValues.name : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="Age"
              name="age"
              className="bg-white"
              defaultValue={initialValues ? initialValues.age : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="Blood Group"
              name="blood_group"
              className="bg-white"
              defaultValue={initialValues ? initialValues.blood_group : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Allergies"
              name="allergies"
              className="bg-white"
              defaultValue={initialValues ? initialValues.allergies : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Past Medical History"
              name="medical_condition"
              className="bg-white"
              defaultValue={
                initialValues ? initialValues.medical_condition : ""
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Vaccinations"
              name="vaccinations"
              className="bg-white"
              defaultValue={initialValues ? initialValues.vaccinations : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Current Diagnosis"
              name="current_diagnosis"
              className="bg-white"
              defaultValue={
                initialValues ? initialValues.current_diagnosis : ""
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Symptoms"
              name="symptoms"
              className="bg-white"
              defaultValue={initialValues ? initialValues.symptoms : ""}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="Phone Number"
              name="phone_number"
              className="bg-white"
              defaultValue={initialValues ? initialValues.phone_number : ""}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              sx={{ p: 1.8, bgcolor: "#9155fd", width: "100px" }}
              className="py-20"
              size="large"
              type="submit"
            >
              SAVE
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default PatientForm;
