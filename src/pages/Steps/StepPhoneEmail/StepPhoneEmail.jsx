import React, { useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import styles from "./StepPhoneEmail.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ onNext }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  return (
    <>
      <div className="mt-16">
        <div className={`${styles.buttonWrap} w-[500px] max-w-[92%] mx-auto`}>
          {/* Phone Button */}
          <button
            className={`${styles.tabButton} ${
              type === "phone" ? styles.active : ""
            } lg:w-[60px] lg:h-[60px] w-[50px] h-[50px]`}
            onClick={() => setType("phone")}
          >
            <BsPhone size={30} />
          </button>
          {/* Email Button */}
          <button
            className={`${styles.tabButton} ${
              type === "email" ? styles.active : ""
            } lg:w-[60px] lg:h-[60px] w-[50px] h-[50px]`}
            onClick={() => setType("email")}
          >
            <AiOutlineMail size={30} />
          </button>
        </div>
        <Component onNext={onNext} />
      </div>
    </>
  );
};

export default StepPhoneEmail;
