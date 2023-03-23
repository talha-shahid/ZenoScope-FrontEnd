import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../http";
import PageNotFound from "../PageNotFound/PageNotFound";
import People from "./People";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

const Users = () => {
  const { user } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  console.log("rerender");

  return user.phone === "+923024042683" ? (
    <>
      <div className="flex justify-between flex-col md:flex-row">
        <BreadCrumbs name={"Users"} />
        <div className="bg-gray-800 flex items-center px-[10px] md:w-[21.8%] w-[80%] rounded-[20px] mx-[25px] outline outline-1 outline-gray-700 mt-[8px] md:mt-[0px]">
          <img src="/images/search-icon.png" alt="search" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            type="text"
            className="bg-transparent border-none outline-none text-white px-[10px] py-[5px] md:py-[8px] "
          />
        </div>
      </div>
      <People search={search} />
    </>
  ) : (
    <PageNotFound />
  );
};

export default Users;
