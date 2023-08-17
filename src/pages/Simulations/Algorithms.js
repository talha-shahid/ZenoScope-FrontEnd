import React from "react";
import SimulationItem from "./SimulationItem";

function Algorithms() {
  console.log("dta structures");
  return (
    <>
      <ul className="grid grid-cols-1 gap-x-4 gap-y-8 lg:gap-x-10 lg:grid-cols-2 mx-2 lg:mx-16">
        <SimulationItem
          source={"/images/sorting.jpeg"}
          title={"Sorting Algorithms"}
          abstract={
            "Explore Sorting Algorithms visually and compare their performance."
          }
          link={"/simulations/algorithms/sorting"}
        />

        <SimulationItem
          source={"/images/pathfinding.jpeg"}
          title={"Pathfinding Algorithms"}
          abstract={
            "Sit back and watch how different pathfinding algorithms works by seeing them wander around the maze."
          }
          link={"/simulations/algorithms/pathfinder"}
        />
      </ul>
    </>
  );
}

export default Algorithms;
