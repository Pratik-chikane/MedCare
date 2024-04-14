import React from "react";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[110vh] bg-gradient-to-br from-purple-50 via-orange-50 to-transparent">
      <div className="max-w-full w-full pt-10 h-60 text-center flex flex-row justify-center space-x-11">
        <div className="flex flex-col md:p-5">
          <p className="text-black text-3xl md:text-5xl md:pt-24 font-extrabold">
            Welcome back, Doctor!
          </p>
          <p className="text-lg lg:text-2xl font-bold text-gray-800 pt-4">
            Your dedication to healing, transforms lives every day.
          </p>
        </div>
        <div>
          <img className="h-56 md:h-80" src="../../hompage.png" alt="wekhk" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center space-x-28 md:my-20 pt-32 ">
        <div
          onClick={() => navigate("/patients")}
          className="cursor-pointer relative w-72 h-48 min-w-0 overflow-hidden rounded-2xl shadow-lg shadow-gray-600 group hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-50 hover:to-yellow-50 bg-white"
        >
          <img
            className="object-cover w-full h-full opacity-50"
            src="../../patient.png"
            alt=""
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-center">
              <p className="text-2xl font-semibold text-black ">View Patients</p>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/patient/create")}
          className="cursor-pointer relative w-72 h-48 min-w-0 overflow-hidden rounded-2xl shadow-lg shadow-gray-600 group hover:bg-gradient-to-br hover:from-red-50 hover:via-purple-50 hover:to-yellow-50 bg-white"
        >
          <img
            className="object-cover w-full h-full opacity-50"
            src="../../patient.png"
            alt=""
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-center">
              <p className="text-2xl font-semibold text-black ">Add Patients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
