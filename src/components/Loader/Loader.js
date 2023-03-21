import React from "react";
import Card from "../Card/Card";
import styles from "../Loader/Loader.module.css";

const Loader = ({ message }) => {
  return (
    <div className="cardWrapper">
      <Card>
        <img
          src="/logo3.png "
          alt="loader"
          height="100"
          width="100"
          className={styles.spinner}
        />
        <span className={styles.message}>{message}</span>
      </Card>
    </div>
  );
};

export default Loader;
