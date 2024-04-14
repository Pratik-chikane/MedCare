import { api } from "../config/ApiConfig";

// Methods to call backend API

export const getPatients = async () => {
  try {
    const response = await api.get("/api/v1/patients");
    if (response && response.data && response.data.patients) {
      return response.data.patients;
    } else {
      throw new Error("Failed to fetch patients");
    }
  } catch (error) {
    console.error("Error fetching patients:", error);
    return [];
  }
};
export const getPatientById = async (id) => {
  try {
    const response = await api.get(`/api/v1/patient/${id}`);
    if (response && response.data.patient) {
      return response.data.patient;
    } else {
      throw new Error("Failed to fetch patients");
    }
  } catch (error) {
    console.error("Error fetching patients:", error);
    return;
  }
};
export const registerPatient = async (formData) => {
  try {
    const response = await api.post("/api/v1/patient/create", formData);
    const { message } = response.data;
    return { success: true, message };
  } catch (error) {
    return { success: false, message: error.response.data.message };
  }
};
export const updatePatient = async (id, formData) => {
  try {
    const response = await api.put(`/api/v1/patient/update/${id}`, formData);
    const { message } = response.data;
    return { success: true, message };
  } catch (error) {
    console.error(error.response.data);
    return { success: false, message: error.response.data.message };
  }
};
export const addMedicationToPatient = async (id, medData) => {
  try {
    const response = await api.post(`api/v1/medication/add/${id}`, medData);
    const { message } = response.data;
    return { success: true, message };
  } catch (error) {
    return { success: false, message: error.response.data.message };
  }
};
export const getMedicationsOfPatient = async (id) => {
  try {
    const response = await api.get(`/api/v1/medications/${id}`);
    if (response && response.data.medications) {
      return response.data.medications;
    } else {
      throw new Error("Failed to fetch medications");
    }
  } catch (error) {
    console.error("Error fetching medications:", error);
    return;
  }
};
export const getMedicationById = async (id) => {
  try {
    const response = await api.get(`/api/v1/medication/${id}`);
    if (response && response.data.medication) {
      return response.data.medication;
    } else {
      throw new Error("Failed to fetch medication");
    }
  } catch (error) {
    console.error("Error fetching medication:", error);
    return;
  }
};
export const updateMedicationById = async (id, medData) => {
  try {
    const response = await api.put(`/api/v1/medication/update/${id}`, medData);

    const { message } = response.data;

    return { success: true, message };
  } catch (error) {
    console.error(error.response.data);
    return { success: false, message: error.response.data.message };
  }
};
export const deleteMedicationById = async (id) => {
  try {
    const response = await api.delete(`/api/v1/medication/delete/${id}`);
    const { message } = response.data;

    return { success: true, message };
  } catch (error) {
    console.error(error.response.data);
    return { success: false, message: error.response.data.message };
  }
};

export const deletePatientById = async (id) => {
  try {
    const response = await api.delete(`/api/v1/patient/delete/${id}`);
    const { message } = response.data;
    return { success: true, message };
  } catch (error) {
    console.error(error.response.data);
    return { success: false, message: error.response.data.message };
  }
};
