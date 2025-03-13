import { Link, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contex/AuthProvider";
import { toast } from "react-toastify";
import PageTitleUpdater from "../../Components/PageTitleUpdater";

AOS.init();

const LoginForm = () => {
  const { signInWithEmail, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    signInWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        toast("User logged in:", user);
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message); 
      });
  };
  PageTitleUpdater("Login - IAR career counselling");
  // useEffect(() => {
  //   document.title = "Login - IAR career counselling"; 
  // }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex bg-white shadow-lg rounded-xl overflow-hidden w-[850px]">
        {/* Left Image Section */}
        <div className="hidden md:flex w-1/2">
          <img
            src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740464839/career%20counselling/job-5382501_1920_ychbqw.jpg"
            alt="Login"
            className="h-full w-full object-cover"
            data-aos="fade-right"
          />
        </div>

        {/* Right Form Section */}
        <form onSubmit={handleSubmitLogin} className="w-full md:w-1/2 p-8" data-aos="fade-left">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome Back!</h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full mb-3"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full mb-3"
            required
          />

          <button className="btn bg-[#a80b1b] text-white w-full">Login</button>

          <p className="text-center text-gray-900 mt-3">
            Don&apos;t have an account?
            <Link to="/register" className="text-[#dc3545] cursor-pointer ml-1 text-lg font-extrabold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
