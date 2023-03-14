import React from "react";
import { motion } from "framer-motion";
import styles from "../../../styles";
import {
  staggerContainer,
  fadeIn,
  planetVariants,
} from "../../../utils/motion";
import { TitleText, TypingText } from "./secondary/CustomTexts";
import { justImagine } from "../../../constants";
import JustImagine from "./secondary/JustImagine";

const Imagine = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| Just Imagine" textStyles="text-center" />
          <TitleText
            title="Imagine a future with better people"
            textStyles="text-center"
          />
          <div className="mt-[48px] flex flex-col md:flex-row justify-between  max-w-[370px] gap-[40px]">
            {justImagine.map((feature) => (
              <JustImagine key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/whats-new.png"
            alt="get-started"
            className="w-[80%] h-[80%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Imagine;
