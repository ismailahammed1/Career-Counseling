import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contex/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

AOS.init();


const RegisterForm = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if (!name || !photo || !email || !password) {
      setError("All fields are required!");
      toast.error("All fields are required!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format!");
      toast.error("Invalid email format!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        toast.success("Account created successfully!");

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Profile updated successfully!");
            navigate("/");
          })
          .catch((err) => {
          
            toast.error("Failed to update profile!",err);
          });
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };
  useEffect(() => {
    document.title = "Register - IAR career counselling"; 
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex bg-white shadow-lg rounded-xl overflow-hidden w-[850px]">
        {/* Left Image Section */}
        <div className="hidden md:flex w-1/2">
          <img
            src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740464839/career%20counselling/job-5382501_1920_ychbqw.jpg"
            alt="Register"
            className="h-full w-full object-cover"
            data-aos="fade-right"
          />
        </div>

        {/* Right Form Section */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 p-8" data-aos="fade-left">
          <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="input input-bordered w-full mb-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="input input-bordered w-full mb-3"
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
            className="input input-bordered w-full mb-3"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="input input-bordered w-full mb-3"
          />

          <button className="btn bg-[#a80b1b] text-white w-full">Register</button>

          <p className="text-center text-gray-900 mt-3">
            Already have an account?
            <Link to="/login" className="text-[#dc3545] cursor-pointer ml-1 text-lg font-extrabold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
