import React from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../../../utils/motion";
import styles from "../../../styles";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  function startRegister() {
    navigate("/authenticate");
  }
  return (
    <section
      className={`${styles.yPaddings} sm:pl-16 pl-6 h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col mx-auto`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            <div>ZENOSCOPE</div>
          </motion.h1>

          <motion.div
            variants={textVariant(1.2)}
            className={`${styles.heroBottomText} flex flex-row justify-center items-center md:-mt-4 lg:-mt-6 tracking-normal `}
          >
            Online Study Companion
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "twen", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] mt-5 -top-[40px] sm:-top-[45px] md:-top-[55px] lg:-top-[70px]" />
          <img
            src="/cover.png"
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative mt-3"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
