import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { useNavigate } from "react-router-dom";

const SimulationItem = ({ title, source, abstract, link }) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(`${link}`)}
      key={title}
      className="relative hover:cursor-pointer"
      onMouseOver={() => setShowDetails(true)}
      onMouseOut={() => setShowDetails(false)}
    >
      <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 ">
        <img
          src={source}
          alt=""
          className="pointer-events-none object-cover group-hover:opacity-80"
        />

        {showDetails && (
          <div className="absolute mt-auto bottom-0 p-3 flex justify-start h-1/2 w-full flex-col bg-[rgba(0,0,0,0.82)]">
            <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white text-center">
              {title}
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <motion.p
                variants={fadeIn("up", "tween", 0.2, 0.6)}
                className="font-thin sm:text-[20px] text-[16px] text-center text-secondary-white mt-3"
              >
                {abstract}
              </motion.p>
            </motion.div>
          </div>
        )}
      </div>
    </li>
  );
};

export default SimulationItem;
