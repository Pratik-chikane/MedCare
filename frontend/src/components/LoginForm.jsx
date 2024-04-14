import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { loginDoctor } from "../services/AuthService";

//Login form for doctor

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const loginData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    const { success, message } = await loginDoctor(loginData);

    if (success) {
      toast.success(message);
      navigate("/");
    } else {
      toast.error(message);
    }
  };
  return (
    <div className=" min-h-[110vh] bg-gradient-to-br from-purple-50 via-orange-50 to-transparent pt-28">
      <Toaster />
      <div className="mb-20 border shadow-xl grid grid-cols-1 md:grid-cols-2 m-auto h-[500px]  sm:max-w-[900px]">
        <div className=" hidden md:block">
          <img
            className="object-cover object-center w-full h-[500px] overflow-hidden"
            src="https://i.pinimg.com/736x/9d/17/04/9d1704b0f3d9135472efba85d75321be.jpg"
            alt="/"
          />
        </div>
        <div className="px-6 justify-around bg-white">
          <div className=" flex justify-center items-center">
            <p className="py-16 text-3xl font-semibold">MedCare</p>
          </div>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
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
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
          <div className="flex justify-center flex-col items-center">
            <div className="py-3 flex items-center">
              <p>Don't have an account ?</p>
              <Button
                onClick={() => navigate("/register")}
                className="ml-5 "
                size="small"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
