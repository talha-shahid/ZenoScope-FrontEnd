import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Explore from "../Home/components/Explore";

const SimulationsHome = () => {
  return (
    <>
      <BreadCrumbs name={"Simulations"} />
      <Explore />
    </>
  );
};

export default SimulationsHome;
