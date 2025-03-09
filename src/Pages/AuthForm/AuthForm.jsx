import { useState } from "react";


const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const toggleForm = () => setIsRegister(!isRegister);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex bg-white shadow-lg rounded-xl overflow-hidden w-[850px]">
        {/* Left Image Section */}
        <div className="hidden md:flex w-1/2">
          <img
            src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740464839/career%20counselling/job-5382501_1920_ychbqw.jpg"
            alt="Auth"
            className="h-full w-full object-cover"
            data-aos="fade-right"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-8" data-aos="fade-left">
          <h2 className="text-2xl font-bold text-center mb-4">
            {isRegister ? "Create an Account" : "Welcome Back!"}
          </h2>

          {isRegister && (
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full mb-3"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mb-3"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full mb-3"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <button className="btn bg-[#a80b1b] text-white w-full">
            {isRegister ? "Register" : "Login"}
          </button>

          <p className="text-center text-gray-900 mt-3">
            {isRegister ? "Already have an account?" : "Don't have an account?"}  
            <span
              onClick={toggleForm}
              className="text-[#dc3545] cursor-pointer ml-1 text-lg font-extrabold"
            >
              {isRegister ? "Register"  : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
