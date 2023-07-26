import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { GiRotaryPhone } from "react-icons/gi";
import { AiFillMail, AiOutlineUser, AiFillLock } from "react-icons/ai";
import { HiOutlinePhotograph } from "react-icons/hi";

const Card = ({ title, icon, children }) => {
  const [pic, setPic] = useState();
  const [width, setWidth] = useState(30);

  function handleIcon() {
    switch (icon) {
      case "phone":
        setPic(<GiRotaryPhone size={30} />);
        break;
      case "email":
        setPic(<AiFillMail size={30} />);
        break;
      case "otp":
        setPic(<AiFillLock size={30} />);
        break;
      case "name":
        setPic(<AiOutlineUser size={30} />);
        break;
      case "photo":
        setPic(<HiOutlinePhotograph size={30} />);
        break;
    }
  }

  useEffect(() => {
    handleIcon();
  }, []);

  return (
    <div className={`mx-auto ${styles.card}`}>
      <div className={styles.headingWrapper}>
        {pic}
        {title && <h1 className={styles.heading}>{title}</h1>}
      </div>
      {children}
    </div>
  );
};

export default Card;
