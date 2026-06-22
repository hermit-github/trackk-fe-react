import { useEffect } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { useLazyGetUsersQuery } from "../store/apis";

const UsersContent = () => {
  const [trigger, { data: apiData, isLoading }] = useLazyGetUsersQuery();

  useEffect(() => {
    trigger();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Users Page</h1>
      <p className="text-gray-600">This is the users page.</p>
      {isLoading && <div>Loading...</div>}
      {apiData?.data?.map((u:any) => {
        return (
          <div
            key={u._id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">{u.name}</h2>

              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  u.isActive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {u.isActive ? "Active" : "Inactive"}
              </span>
            </div>

            <p className="text-gray-500 mt-1">{u.email}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {u.roles.map((role:any) => (
                <span
                  key={role}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                >
                  {role}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-400 mt-3">
              Joined: {new Date(u.createdAt).toLocaleDateString()}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const UsersPage = () => {
  return (
    <MainLayout
      header={<Header />}
      sidebar={<Sidebar />}
      body={<UsersContent />}
    />
  );
};

export default UsersPage;
