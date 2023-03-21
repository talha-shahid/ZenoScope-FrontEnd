import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../http";
import PageNotFound from "../PageNotFound/PageNotFound";

const Users = () => {
  const [people, setPeople] = useState(null);
  const { user } = useSelector((state) => state.auth);

  async function adminRequest(user) {
    console.log(user);
    try {
      const { data } = await getAllUsers({ user });
      setPeople(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    adminRequest(user);
  }, []);

  return people ? <div>People</div> : <PageNotFound />;
};

export default Users;
