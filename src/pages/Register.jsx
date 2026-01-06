import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 pt-20">
      <div className="w-full max-w-md bg-slate-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Create Your Account
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-slate-300 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md bg-slate-900 text-white border border-slate-700 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-slate-900 text-white border border-slate-700 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-2 rounded-md bg-slate-900 text-white border border-slate-700 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-2 rounded-md bg-slate-900 text-white border border-slate-700 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md font-semibold transition"
          >
            Register
          </button>
        </form>

        <p className="text-slate-400 text-sm text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
