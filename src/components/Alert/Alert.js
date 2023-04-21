import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";

const Alert = () => {
  return (
    <div className="rounded-md bg-gray-700 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <HiOutlineInformationCircle className="h-5 w-5 text-gray-300" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-semibold text-gray-300">
            Latest from Admin
          </h3>
          <div className="mt-2 text-sm text-gray-300">
            <p>
              Simulation of Chemistry Lab is now available. Please check it out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
