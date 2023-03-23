// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../http";

export default function People({ search }) {
  const [people, setPeople] = useState();
  const { user } = useSelector((state) => state.auth);
  console.log(`in people ${search}`);

  async function adminRequest(user) {
    try {
      const { data } = await getAllUsers({ user }, search);
      console.log(data);
      setPeople(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    adminRequest(user);
  }, [search]);

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6"
    >
      {people?.map((person) => (
        <li
          key={person._id}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-gray-800 text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full object-cover"
              src={`${
                person.avatar ? person.avatar : "/images/monkey-avatar.png"
              }`}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-white">
              {person.name}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.phone}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  {person.phone === "+923024042683" ? "Admin" : "User"}
                </span>
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}
