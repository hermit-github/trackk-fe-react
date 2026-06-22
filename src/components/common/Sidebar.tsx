import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-full bg-gray-50 p-4">
      <div className="mb-8">
        <h2 className="text-lg font-semibold">
          Navigation
        </h2>
      </div>

      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="block rounded-md px-3 py-2 hover:bg-gray-200"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/users"
              className="block rounded-md px-3 py-2 hover:bg-gray-200"
            >
              Users
            </Link>
          </li>

          <li>
            <Link
              to="/settings"
              className="block rounded-md px-3 py-2 hover:bg-gray-200"
            >
              Settings
            </Link>
          </li>

          <li>
            <Link
              to="/reports"
              className="block rounded-md px-3 py-2 hover:bg-gray-200"
            >
              Reports
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}