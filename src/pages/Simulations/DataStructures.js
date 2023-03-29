import React from "react";
import SimulationItem from "./SimulationItem";

function DataStructures() {
  console.log("dta structures");
  return (
    <>
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
      </ul>
    </>
  );
}

export default DataStructures;
