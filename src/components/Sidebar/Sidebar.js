// import React from "react";
// import { useSelector } from "react-redux";
// import ListItem from "./ListItem";
// import LinkItems from "./ListItems.json";
// import AdminItems from "./AdminItems.json";

// const Sidebar = () => {
//   const { user } = useSelector((state) => state.auth);

//   return (
//     <div className={`z-40 w-56 h-screen px-2 overflow-y-auto bg-gray-800`}>
//       <div className="py-4 overflow-y-auto">
//         <ul className="space-y-2">
//           {user.phone === "+923024042683"
//             ? AdminItems.map((adminItem) => (
//                 <ListItem link={adminItem.link} title={adminItem.title} key={adminItem.title}/>
//               ))
//             : LinkItems.map((linkItem) => (
//                 <ListItem link={linkItem.link} title={linkItem.title} key={linkItem.title}/>
//               ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdFeedback, MdOutlineSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: MdOutlineSpaceDashboard,
    current: true,
  },
  { name: "Users", href: "/users", icon: FaUsers, current: false },
  {
    name: "Simulations",
    href: "/simulations",
    icon: AiFillPlayCircle,
    current: false,
  },
  { name: "Feedback", href: "#", icon: MdFeedback, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  ></Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="/logo.png"
                        alt="ZENOSCOPE"
                      />
                      <h2 className="font-extrabold text-[24px] leading-[30px] text-white/70">
                        ZENOSCOPE
                      </h2>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img className="h-8 w-auto" src="/logo.png" alt="ZENOSCOPE" />
              <h2 className="font-extrabold text-[24px] leading-[30px] text-white/70">
                ZENOSCOPE
              </h2>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="z-20 md:hidden border-y-[1px] border-white/10 sticky top-0 flex h-16 shrink-0 items-center gap-x-4  px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 bg-[#3c348321] ">
            <span className="text-white/80 font-semibold block md:hidden ml-10  animate-pulse">
              Open SideBar
            </span>
            <button
              type="button"
              className="-m-2.5 p-2.5 text-white/70 hover:text-white/90  lg:hidden animate-pulse"
              onClick={() => setSidebarOpen(true)}
            >
              <BsFillArrowRightCircleFill size={30} />
            </button>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
