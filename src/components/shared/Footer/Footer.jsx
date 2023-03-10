import React from "react";
import { motion } from "framer-motion";
import styles from "../../../styles";
import { footerVariants } from "../../../utils/motion";
import { useLocation } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineArrowRight,
} from "react-icons/ai";

const Footer = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname != "/authenticate" &&
        location.pathname != "/activate" && (
          <>
            <div className=" h-[2px] bg-white opacity-10 " />
            <motion.footer
              variants={footerVariants}
              initial="hidden"
              whileInView="show"
              className={`${styles.paddings} py-8 relative `}
            >
              <div className="footer-gradient" />

              <div
                className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
              >
                {/* <div className="flex items-center justify-between flex-wrap gap-5">
                <h4 className="font-bold md:text-[64px] text-[44px] text-white">
                  Explore your Imagination
                </h4>
                <button className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
                  <AiOutlineArrowRight size={20} />
                  <span className="font-normal text-white text-[18px]">
                    Explore
                  </span>
                </button>
              </div> */}

                <div className="flex flex-col">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex">
                      <img
                        src="/logo3.png"
                        alt="logo"
                        className="mt-[5px] w-[24px] h-[24px] object-contain"
                      />
                      <h4 className="font-extrabold text-[24px] text-white">
                        ZENOSCOPE
                      </h4>
                    </div>
                    <p className="font-normal text-[14px] text-white opacity-50">
                      Copyright © 2022 - 2023 ZenoScope. All rights reserved.
                    </p>
                    <div className="flex gap-2 cursor-pointer">
                      <AiFillFacebook size={30} />
                      <AiFillInstagram size={30} />
                      <AiFillTwitterSquare size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.footer>
          </>
        )}
    </>
  );
};

export default Footer;
