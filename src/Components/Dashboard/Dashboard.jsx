import React from "react";
import {
  FaHome,
  FaUser,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaUsers,
  FaDollarSign,
  FaShoppingCart,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here (clear user session, etc.)
    localStorage.removeItem("user-data");
    navigate("/"); // Redirect to login page
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white min-h-screen p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 p-3 hover:bg-blue-700 rounded-md transition"
              >
                <FaHome className="text-xl" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="flex items-center space-x-2 p-3 hover:bg-blue-700 rounded-md transition"
              >
                <FaUser className="text-xl" />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link
                to="/analytics"
                className="flex items-center space-x-2 p-3 hover:bg-blue-700 rounded-md transition"
              >
                <FaChartLine className="text-xl" />
                <span>Analytics</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center space-x-2 p-3 hover:bg-blue-700 rounded-md transition"
              >
                <FaCog className="text-xl" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white p-3 mt-6 rounded-md hover:bg-red-700 transition"
        >
          <FaSignOutAlt className="text-xl" />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 ">Dashboard</h1>

        {/* Stats Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Users Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <FaUsers className="text-blue-600 text-4xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  Total Users
                </h2>
                <p className="text-3xl font-bold text-blue-600">1,245</p>
              </div>
            </div>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">+12% this month</p>
          </div>

          {/* Monthly Revenue Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <FaDollarSign className="text-green-600 text-4xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  Monthly Revenue
                </h2>
                <p className="text-3xl font-bold text-green-600">$23,456</p>
              </div>
            </div>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">+8.5% from last month</p>
          </div>

          {/* New Orders Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <FaShoppingCart className="text-orange-600 text-4xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  New Orders
                </h2>
                <p className="text-3xl font-bold text-orange-600">78</p>
              </div>
            </div>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full w-2/3"></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">+5% this week</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
