// import { PaperClipIcon } from '@heroicons/react/20/solid'

import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <div className="overflow-hidden bg-gray-800 shadow sm:rounded-lg m-16">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-white">
          Profile Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-300">
          Personal details and information
        </p>
      </div>
      <div className="border-t border-gray-700 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-900">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
              {user.name}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone #</dt>
            <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
              {user.phone}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">User ID</dt>
            <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
              {user._id}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Activated</dt>
            <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
              {`${user.activated}`}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
