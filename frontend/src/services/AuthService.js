import axios from "axios";
// Methods to call backend API

export const registerDoctor = async (doctorData) => {
  try {
    const response = await axios.post(
      "http://localhost:8081/api/v1/register",
      doctorData
    );
    const { token, message } = response.data;
    localStorage.setItem("jwt", token);
    return { success: true, message };
  } catch (error) {
    return { success: false, message: error.response.data.message };
  }
};

export const loginDoctor = async (loginData) => {
  try {
    const response = await axios.post(
      "http://localhost:8081/api/v1/login",
      loginData
    );
    const { token, message } = response.data;
    localStorage.setItem("jwt", token);
    return { success: true, message };
  } catch (error) {
    return { success: false, message: error.response.data.message };
  }
};

export const logout = () => {
  localStorage.removeItem("jwt");
};
