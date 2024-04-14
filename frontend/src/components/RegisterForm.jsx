import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { registerDoctor } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

// Registration form for doctor
const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      name: data.get("name"),
      experience: data.get("experience"),
      specialization: data.get("specialization"),
      email: data.get("email"),
      password: data.get("password"),
    };

    const { success, message } = await registerDoctor(userData);
    if (success) {
      navigate("/");
      toast.success(message);
    } else {
      toast.error(message);
    }
  };
  return (
    <div className=" min-h-[110vh] bg-gradient-to-br from-purple-50 via-orange-50 to-transparent pt-14">
      <Toaster />
      <div className="mb-14 border shadow-xl grid grid-cols-1 md:grid-cols-2 m-auto h-[600px]  sm:max-w-[900px] ">
        <div className=" hidden md:block">
          <img
            className="object-cover object-center w-full h-[600px] overflow-hidden"
            src="https://i.pinimg.com/736x/9d/17/04/9d1704b0f3d9135472efba85d75321be.jpg"
            alt="/"
          />
        </div>
        <div className="px-6 justify-around bg-white">
          <div className=" flex justify-center items-center">
            <p className="py-5 text-3xl font-semibold">MedCare</p>
          </div>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="experience"
                  name="experience"
                  label="Experience"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="specialization"
                  name="specialization"
                  label="Specialization"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  autoComplete="disabled"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className="bg-[#9155FD] w-full"
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ padding: "0.8rem 0", bgcolor: "#9155FD" }}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
          <div className="flex justify-center flex-col items-center">
            <div className="py-3 flex items-center">
              <p>Already have an account ?</p>
              <Button
                onClick={() => navigate("/login")}
                className="ml-5 "
                size="small"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
