const Login = () =>{
    return(
        <>
            <section className="bg-gray-100 min-h-screen w-full flex items-center justify-center" >
            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
                <h1 className="text-2xl text-center font-bold mb-6">SignIn</h1>
                <div>
                <input
                    placeholder="Enter Email..."
                    className="border border-gray-300 w-full cursor-pointer"
                    type="email"
                />
                </div>

                <div>
                <input
                    placeholder="Enter Password..."
                    className="border border-gray-300 w-full cursor-pointer"
                    type="password"
                />
                </div>

                <button className="w-full bg-green-600 rounded-2xl cursor-pointer text-white mb-20 mt-20">
                    SignIn
                </button>
            </div>

            </section>
        </>
    )
}

export default Login;