import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { textVariant2 } from "../../../utils/motion";
import { motion } from "framer-motion";
import Alert from "../../../components/Alert/Alert";

const BasicDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [onDesktop, setOnDesktop] = useState(true);

  useEffect(() => {
    function checkMobile() {
      if (window.innerWidth < 768) {
        setOnDesktop(false);
      } else {
        setOnDesktop(true);
      }
    }

    // Add event listener
    window.addEventListener("resize", checkMobile);

    checkMobile();
  }, []);

  toast.success("Logged-in successfully", {
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
        autoClose={800}
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
        {onDesktop && <Sidebar />}
        <div className="w-[100%] md:w-[50%] ">
          <motion.h2
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className={`mt-[8px] md:text-[30px] text-[20px] text-white`}
          >
            <div className="font-normal text-center">Welcome, </div>
            <div className="text-center md:text-[50px] text-[40px] tracking-wider font-bold">
              {user.name}
            </div>
          </motion.h2>

          <div className="m-10">
            <Alert />
          </div>
        </div>
        <div className="w-[50%] h-[50%] object-cover hidden md:flex justify-center ">
          <img src="/Pencil.png" alt="pencil" />
        </div>
      </div>
    </>
  );
};

export default BasicDashboard;
