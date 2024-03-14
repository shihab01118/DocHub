import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import GoogleButton from "../../components/Shared/Button/GoogleButton";

const Signup = () => {
  const [visible, setVisible] = useState(false);

  const [checked, setChecked] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>DocHub - Signup</title>
      </Helmet>
      <section className="bg-signup min-h-screen bg-cover bg-no-repeat bg-center relative">
        {/* Overlay covering the entire section */}
        <div className="bg-primary absolute inset-0 opacity-40 z-0"></div>

        {/* Header */}
        <div className="max-w-7xl mx-auto py-3 px-2 md:flex justify-between items-center z-20 relative hidden">
          <Link to="/">
            <div className="flex items-center gap-2 lg:gap-3 ">
              <img
                src={logo}
                alt="logo-img"
                className="xs:w-8 sm:w-10 lg:w-12"
              />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary">
                DocHub
              </h2>
            </div>
          </Link>
          <Link to="/login">
            <span className="text-xl font-light italic text-white/90">
              Already have an account? Sign in
            </span>
          </Link>
        </div>

        {/* Logo for small screen */}
        <div className="absolute z-30 left-5 top-5 md:hidden">
          <Link to="/">
            <div className="flex items-center gap-2 lg:gap-3">
              <img
                src={logo}
                alt="logo-img"
                className="xs:w-8 sm:w-10 lg:w-12"
              />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary">
                DocHub
              </h2>
            </div>
          </Link>
        </div>

        {/* Signup form */}
        <div className="flex items-center justify-center min-h-screen md:min-h-[calc(100vh-72px)] relative z-20">
          <div className="md:max-w-md w-full xs:flex xs:items-center xs:h-screen md:h-fit bg-white/30 backdrop-blur-md md:rounded-lg xs:p-4 sm:p-8">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-center text-3xl text-primary font-bold">
                Create Account
              </h2>

              {/* form */}
              <form onSubmit={handleSignup} className="mt-6">
                {/* Name field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full h-11 px-6 rounded-full bg-white/30 focus:outline-none text-[#555] placeholder-[#777]"
                  />
                </div>

                {/* Email field */}
                <div className="mt-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full h-11 px-6 rounded-full bg-white/30 focus:outline-none text-[#555] placeholder-[#777]"
                  />
                </div>

                {/* Password field */}
                <div className="mt-4 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="w-full h-11 px-6 rounded-full bg-white/30 focus:outline-none text-[#555] placeholder-[#777]"
                  />

                  {/* eye button */}
                  <span
                    onClick={() => setVisible(!visible)}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#555]"
                  >
                    {visible ? <FiEyeOff /> : <FiEye />}
                  </span>
                </div>

                {/* Terms and condition checkbox label */}
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    checked={checked}
                    onChange={() => {
                      setChecked(!checked);
                    }}
                    className="hidden"
                  />
                  <label
                    htmlFor="myCheckbox"
                    className={`cursor-pointer border border-primary rounded w-4 h-4 flex items-center justify-center ${
                      checked ? "bg-sky text-white" : "bg-white"
                    }`}
                  >
                    <svg
                      className={`fill-current ${
                        checked ? "" : "hidden"
                      } w-4 h-4 pointer-events-none`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  </label>
                  <span className="ml-2 text-primary">
                    I accept all the terms and conditions.
                  </span>
                </div>

                {/* Signup button */}
                <div className="flex justify-center mt-4">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="w-full rounded-full bg-secondary text-white h-11 font-medium cursor-pointer active:scale-95 transition-all hover:bg-sky"
                  />
                </div>
              </form>

              {/* Divider */}
              <div className="py-3 flex items-center text-primary text-sm before:flex-[1_1_0%] before:border-t before:border-primary before:me-6 after:flex-[1_1_0%] after:border-t after:border-primary after:ms-6">
                or
              </div>

              {/* Google sign in button */}
              <GoogleButton />

              {/* signup link for small device */}
              <div className="w-fit mx-auto mt-4 md:hidden text-primary">
                <Link to="/login">
                  Already have an account?{" "}
                  <span className="text-sky">Sign In</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
