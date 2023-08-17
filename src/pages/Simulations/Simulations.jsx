import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Algorithms from "./Algorithms";
import DataStructures from "./DataStructures";

const Simulations = () => {
  const { id: simulation } = useParams();
  const [name, setName] = useState("");

  async function simulationName() {
    switch (simulation) {
      case "datastructures":
        setName("Data Structures");
        break;
      case "algorithms":
        setName("Algorithms");
        break;
      case "physics":
        setName("Physics");
        break;
    }
  }

  const simulationComponent = {
    algorithms: Algorithms,
    datastructures: DataStructures,
  };

  const Component = simulationComponent[simulation];

  useEffect(() => {
    simulationName();
  }, []);

  return (
    <>
      <div>
        <h1 className="flex justify-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-10 mb-6">
          {name} Simulations
        </h1>

        <div className="p-6">
          <Component />
        </div>
      </div>
    </>
  );
};

export default Simulations;
