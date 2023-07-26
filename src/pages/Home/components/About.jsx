import React from "react";
import styles from "../../../styles";

const About = () => {
  return (
    <section className={`py-2 relative z-10 pb-2`}>
      <div className="gradient-02 z-0" />
      <div
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <p
          className={`font-normal text-[14px] text-secondary-white text-center`}
        >
          | About ZenoScope
        </p>

        <p className="font-normal sm:text-[32px] text-[20px] text-center text-secondary-white p-4 md:p-8">
          <span className="font-extrabold ">Zenoscope</span> offers an efficient
          and modernized approach to traditional learning by replacing outdated
          textbooks, memorization, complex mathematical equations and abstract
          terminologies with the art and science of{" "}
          <span className="font-extrabold">Data Visualization.</span> Learn
          through <span className="font-bold">simulations</span> and{" "}
          <span className="font-bold">experiments</span> designed and crafted
          carefully based on your requirements.
        </p>

        <img
          src="/arrow-down.svg"
          alt="arrow-down"
          className="w-[18px] h-[28px] object-contain mt-[40px]"
        />
      </div>
    </section>
  );
};

export default About;
