import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} px-[12px] md:px-[15px] lg:px-[20px] py-[7px] md:py-[8px] lg:py-[10px] text-sm md:text-base lg:text-xl`}
    >
      <span>{text}</span>
      <img
        className="ml-[4px] lg:ml-[10px]"
        src="/images/arrow-forward.png"
        alt="arrow"
      />
    </button>
  );
};
export default Button;
