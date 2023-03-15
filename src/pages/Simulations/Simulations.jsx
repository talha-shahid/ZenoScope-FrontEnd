import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  chemistryData,
  algorithmsData,
  dataStructuresData,
  physicsData,
} from "../../constants/simulationsData";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const Simulations = () => {
  const { id: simulation } = useParams();
  const [name, setName] = useState("");
  const [data, setData] = useState();
  const [showDetails, setShowDetails] = useState(false);
  console.log(simulation);
  console.log(data);

  async function simulationName() {
    switch (simulation) {
      case "chemistry":
        setName("Chemistry");
        setData(chemistryData);
        break;
      case "data-structures":
        setName("Data Structures");
        setData(dataStructuresData);
        break;
      case "algorithms":
        setName("Algorithms");
        setData(algorithmsData);
        break;
      case "physics":
        setName("Physics");
        setData(physicsData);
        break;
    }
  }

  useEffect(() => {
    simulationName();
  }, [name]);

  console.log(data);

  return (
    <>
      <h1 className="flex justify-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-10 mb-6">
        {name} Simulations
      </h1>

      <div className="p-6">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-8 lg:gap-x-10 lg:grid-cols-2 mx-2 lg:mx-16"
        >
          {data?.map((component) => (
            <li
              key={component.title}
              className="relative hover:cursor-pointer"
              onMouseOver={() => setShowDetails(true)}
              onMouseOut={() => setShowDetails(false)}
            >
              <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 ">
                <img
                  src={component.source}
                  alt=""
                  className="pointer-events-none object-cover group-hover:opacity-80"
                />

                {showDetails && (
                  <div className="absolute mt-auto bottom-0 p-3 flex justify-start h-1/2 w-full flex-col bg-[rgba(0,0,0,0.82)]">
                    <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white text-center">
                      {component.title}
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
                        {component.abstract}
                      </motion.p>
                    </motion.div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Simulations;
