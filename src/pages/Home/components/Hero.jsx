import React from "react";
import styles from "../../../styles";

const Hero = () => {
  return (
    <section className={`pt-4 overflow-hidden`}>
      <div className={`${styles.innerWidth} flex flex-col mx-auto`}>
        <div className="flex justify-center items-center flex-col relative z-10">
          <h1 className={styles.heroHeading}>
            <div>ZENOSCOPE</div>
          </h1>
          <div
            className={`${styles.heroBottomText} flex flex-row justify-center items-center md:-mt-4 lg:-mt-6 tracking-widest text-base sm:text-lg md:text-xl lg:text-3xl`}
          >
            Online Study Companion
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
