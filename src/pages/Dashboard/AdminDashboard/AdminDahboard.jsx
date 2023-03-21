import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../../../components/Sidebar/Sidebar";

const AdminDashboard = () => {
  const [onDesktop, setOnDesktop] = useState(true);

  toast.success("Logged-in as Admin", {
    position: "bottom-center",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
      />

      <div className="flex overflow-hidden">
        {onDesktop && <Sidebar />} Admin
      </div>
    </>
  );
};

export default AdminDashboard;
