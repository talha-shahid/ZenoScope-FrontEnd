import React, { useEffect, useState } from "react";
import SimulationItem from "./SimulationItem";
import {
  chemistryData,
  algorithmsData,
  dataStructuresData,
  physicsData,
} from "./simulationsData";

import { useParams } from "react-router-dom";

const Simulations = () => {
  const { id: simulation } = useParams();
  const [name, setName] = useState("");
  const [data, setData] = useState();

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
  }, []);

  return (
    <>
      <div>
        <h1 className="flex justify-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-10 mb-6">
          {name} Simulations
        </h1>

        <div className="p-6">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-4 gap-y-8 lg:gap-x-10 lg:grid-cols-2 mx-2 lg:mx-16"
          >
            <SimulationItem
              source={"/images/sorting.jpg"}
              title={"Sorting Algorithms"}
              abstract={
                "Explore Sorting Algorithms visually and compare their performance."
              }
              link={"/simulations/algorithms/sorting"}
            />

            <SimulationItem
              source={"/images/pathfinding.png"}
              title={"Pathfinding Algorithms"}
              abstract={
                "Sit back and watch how different pathfinding algorithms works by seeing them wander around the maze."
              }
              link={"/simulations/algorithms"}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Simulations;
