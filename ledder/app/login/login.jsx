const Login = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
        {/* Welcome Section */}
        <div className="mb-8 w-full max-w-lg rounded-2xl bg-green-300 p-8 text-center text-black shadow-lg md:max-w-xl">
          <h2 className="text-2xl font-bold md:text-3xl">Welcome back Sipho!</h2>
          <span className="mt-2.5 block text-sm md:text-base">
            Don't have an account?{" "}
            <a href="#" className="font-bold underline transition duration-300 hover:text-green-700">
              Sign Up
            </a>
          </span>
        </div>

        {/* Sign In Form */}
        <form className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg md:max-w-xl">
          <h1 className="mb-6 text-2xl font-bold text-center">Sign In</h1>
          <div className="space-y-4">
            <input
              placeholder="Enter Email..."
              className="w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              type="email"
            />
            <input
              placeholder="Enter Password..."
              className="w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              type="password"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-green-600 p-2 cursor-pointer text-white transition duration-300 hover:bg-green-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;