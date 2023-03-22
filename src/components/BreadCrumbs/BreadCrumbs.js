// import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { BsChevronRight } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { useLocation } from "react-router-dom";

const pages = [
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];

export default function BreadCrumbs({ name }) {
  const location = useLocation();
  return (
    <nav className="flex ml-16" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="/dashboard" className="text-gray-400 hover:text-gray-500">
              <MdSpaceDashboard
                className="h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="sr-only">DashBoard</span>
            </a>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <BsChevronRight
              className="h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <a
              href={location.pathname}
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {name}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
}
