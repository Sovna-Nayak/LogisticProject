import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE – LOGIN FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 mb-6">
            Login to manage your shipments
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE – IMAGE / INFO */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white items-center justify-center p-10">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-4">
            Fast. Secure. Reliable.
          </h2>
          <p className="text-lg opacity-90">
            Track shipments, manage orders, and stay updated with real-time
            logistics insights.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3468/3468377.png"
            alt="Logistics"
            className="mt-8 w-80 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
