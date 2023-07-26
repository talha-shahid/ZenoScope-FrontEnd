import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/motion";
import styles from "../../../styles";
import { TypingText } from "./secondary/CustomTexts.jsx";

const About = () => {
  return (
    <section className={`py-2 relative z-10 pb-2`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About  ZenoScope " textStyles="text-center" />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="font-normal sm:text-[32px] text-[20px] text-center text-secondary-white p-4 md:p-8"
        >
          <span className="font-extrabold ">Zenoscope</span> offers an efficient
          and modernized approach to traditional learning by replacing outdated
          textbooks, memorization, complex mathematical equations and abstract
          terminologies with the art and science of{" "}
          <span className="font-extrabold">Data Visualization.</span> Learn
          through <span className="font-bold">simulations</span> and{" "}
          <span className="font-bold">experiments</span> designed and crafted
          carefully based on your requirements.
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow-down"
          className="w-[18px] h-[28px] object-contain mt-[40px]"
        />
      </motion.div>
    </section>
  );
};

export default About;
