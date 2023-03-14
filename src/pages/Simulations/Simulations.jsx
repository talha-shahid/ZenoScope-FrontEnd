import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  chemistryData,
  algorithmsData,
  dataStructuresData,
  physicsData,
} from "../../constants/simulationsData";

const Simulations = () => {
  const { id: simulation } = useParams();
  const [name, setName] = useState("");
  const [data, setData] = useState();
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
          {data?.map((file) => (
            <li key={file.source} className="relative">
              <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img
                  src={file.source}
                  alt=""
                  className="pointer-events-none object-cover group-hover:opacity-75"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">View details for {file.title}</span>
                </button>
              </div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                {file.title}
              </p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500">
                {file.size}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Simulations;
