import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import LinkItems from "./ListItems.json";
import AdminItems from "./AdminItems.json";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={`z-40 w-56 h-screen px-2 overflow-y-auto bg-gray-800`}>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2">
          {user.phone === "+923024042683"
            ? AdminItems.map((adminItem) => (
                <ListItem link={adminItem.link} title={adminItem.title} />
              ))
            : LinkItems.map((linkItem) => (
                <ListItem link={linkItem.link} title={linkItem.title} />
              ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
