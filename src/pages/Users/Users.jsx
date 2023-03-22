import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../http";
import PageNotFound from "../PageNotFound/PageNotFound";
import People from "./People";

const Users = () => {
  const { user } = useSelector((state) => state.auth);

  return user.phone === "+923024042683" ? <People /> : <PageNotFound />;
};

export default Users;
