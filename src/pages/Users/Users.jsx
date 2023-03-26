import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../http";
import PageNotFound from "../PageNotFound/PageNotFound";
import People from "./People";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Pagination from "../../components/Pagination/Pagination";

const Users = () => {
  const { user } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState(undefined);
  const [count, setCount] = useState(undefined);
  const [skip, setSkip] = useState(undefined);
  const [pageCount, setPageCount] = useState(undefined);

  //Admin Request
  async function adminRequest(user) {
    try {
      const { data } = await getAllUsers({ user }, search, page);
      setPeople(data.users);
      setCount(data.Pagination.count);
      setSkip(data.Pagination.skip);
      setPageCount(data.Pagination.pageCount);
    } catch (error) {
      console.log(error.message);
    }
  }
  //UseEffect
  useEffect(() => {
    adminRequest(user);
  }, [search, page]);

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
      <People search={search} page={page} people={people} />
      <Pagination
        page={page}
        setPage={setPage}
        count={count}
        skip={skip}
        pageCount={pageCount}
      />
    </>
  ) : (
    <PageNotFound />
  );
};

export default Users;
