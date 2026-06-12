import { Link } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div
      className="
      w-64
      min-h-screen
      bg-slate-900
      text-white
      "
    >
      <h1 className="text-2xl p-6 font-bold">
        Menu Bar
      </h1>

      <ul className="space-y-2 px-4">
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <FiHome />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/customers"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <FiUsers />
            Customers
          </Link>
        </li>

        <li>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 text-left"
          >
            <FiLogOut />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;