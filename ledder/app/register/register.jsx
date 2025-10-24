import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        { email, password },
        { withCredentials: true }
      );
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
        {/* Header Section */}
        <div className="mb-8 w-full max-w-lg rounded-2xl bg-green-300 p-8 text-center text-black shadow-lg md:max-w-xl">
          <h2 className="text-2xl font-bold md:text-3xl">Create an Account</h2>
          <span className="mt-2.5 block text-sm md:text-base">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold underline transition duration-300 hover:text-green-700"
            >
              Sign In
            </Link>
          </span>
        </div>

        {/* Register Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg md:max-w-xl"
        >
          <h1 className="mb-6 text-2xl font-bold text-center">Sign Up</h1>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
            <input
              type="password"
              placeholder="Enter Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-green-600 p-2 cursor-pointer text-white transition duration-300 hover:bg-green-700"
          >
            Sign Up
          </button>
          {message && (
            <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
          )}
        </form>
      </div>
    </>
  );
};

export default Register;
