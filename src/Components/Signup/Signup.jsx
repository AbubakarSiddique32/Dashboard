import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("user-data", JSON.stringify(detail));
    navigate("/");
  };

  return (
    <div className=" flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 border border-gray-300">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Signup
        </h1>
        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <div className="block text-gray-700 font-medium mb-1">Email</div>
            <input
              type="email"
              value={detail.email}
              onChange={(e) => setDetail({ ...detail, email: e.target.value })}
              placeholder="Enter Your Email..."
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <div className="block text-gray-700 font-medium mb-1">Password</div>
            <input
              type="password"
              value={detail.password}
              onChange={(e) =>
                setDetail({ ...detail, password: e.target.value })
              }
              placeholder="Enter Your Password"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <div className="block text-gray-700 font-medium mb-1">
              Confirm Password
            </div>
            <input
              type="password"
              value={detail.confirmPassword}
              onChange={(e) =>
                setDetail({ ...detail, confirmPassword: e.target.value })
              }
              placeholder="Enter Your Password"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Signup
            </button>
            <p className=" text-sm mt-3 text-gray-700 ">
              Already have an account?
              <Link to="/" className=" font-bold underline ml-1">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
