import React from "react";
import { motion } from "framer-motion";
import { navVariants } from "../../../utils/motion";
import styles from "../../../styles";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative `}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />

      <div className={`${styles.innerWidth} flex flex-row gap-1`}>
        <img
          src="/logo3.png"
          alt="logo"
          className="mt-[2px] w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          ZENOSCOPE
        </h2>
      </div>
    </motion.nav>
  );
};

export default Navbar;
