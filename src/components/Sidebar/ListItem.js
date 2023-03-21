import React, { useEffect, useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BsFillPlayFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export default function ListItem({ link, title }) {
  const [icon, setIcon] = useState();

  function handleIcon() {
    switch (title) {
      case "Dashboard":
        setIcon(<MdSpaceDashboard size={30} />);
        break;
      case "Rooms":
        setIcon(<IoIosPeople size={30} />);
        break;
      case "Simulations":
        setIcon(<BsFillPlayFill size={30} />);
        break;
      case "Profile":
        setIcon(<CgProfile size={30} />);
        break;
      case "Users":
        setIcon(<IoIosPeople size={30} />);
        break;
    }
  }

  useEffect(() => {
    handleIcon();
  }, []);

  return (
    <>
      <li className={`${title === "Dashboard" ? "bg-gray-900" : ""}`}>
        <a
          href={link}
          className="flex items-center p-2 text-base font-normalrounded-lg text-white hover:bg-gray-700"
        >
          {icon}
          <span className="ml-3">{title}</span>
        </a>
      </li>
    </>
  );
}
