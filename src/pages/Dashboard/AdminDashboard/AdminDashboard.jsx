import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../../../components/Sidebar/Sidebar";

const AdminDashboard = () => {
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

      <Sidebar>hello</Sidebar>
    </>
  );
};

export default AdminDashboard;
