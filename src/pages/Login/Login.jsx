import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import GoogleButton from "../../components/Shared/Button/GoogleButton";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Logo from "../../components/Shared/Logo/Logo";
import Button from "../../components/Shared/Button/Button";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>DocHub - Login</title>
      </Helmet>
      <section className="min-h-screen relative">

        {/* Navbar */}
        <div className="max-w-6xl mx-auto py-3 px-2 md:flex justify-between items-center z-20 hidden">
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/signup">
            <span className="text-xl font-light italic text-dark">
              Don{"'"}t have an account? Create one
            </span>
          </Link>
        </div>

        {/* Logo for small screen */}
        <div className="absolute z-50 left-5 top-5 md:hidden">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Login form */}
        <div className="flex items-center justify-center min-h-screen md:min-h-[calc(100vh-72px)] relative z-20">
          <div className="md:max-w-md w-full xs:flex xs:items-center xs:h-screen md:h-fit bg-white md:rounded-lg xs:p-4 sm:p-8 border border-[#eee] drop-shadow-sm">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-center text-3xl text-dark font-bold">
                Login
              </h2>

              {/* form */}
              <form onSubmit={handleLogin} className="mt-8">
                {/* Email field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full h-12 px-6 rounded-full bg-white focus:outline-none text-[#555] border border-[#ddd] focus:border-primary"
                  />
                </div>

                {/* Password field */}
                <div className="mt-5 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="w-full h-12 px-6 rounded-full bg-white focus:outline-none text-[#555] border border-[#ddd] focus:border-primary"
                  />

                  {/* eye button */}
                  <span
                    onClick={() => setVisible(!visible)}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#aaa] text-lg"
                  >
                    {visible ? <FiEyeOff /> : <FiEye />}
                  </span>
                </div>

                {/* Remember & forget */}
                <div className="flex justify-between items-center mt-4 text-[#333]">
                  <div className="flex items-center">
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
                      className={`cursor-pointer border border-dark rounded w-4 h-4 flex items-center justify-center ${
                        checked ? "bg-sky text-white" : "bg-white"
                      }`}
                    >
                      <svg
                        className={`fill-current ${
                          checked ? "text-white" : "hidden"
                        } w-4 h-4 pointer-events-none`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    </label>
                    <span className="ml-2 text-dark">Remember me</span>
                  </div>
                  <p>Forgot password?</p>
                </div>

                {/* Login button */}
                <div className="flex justify-center mt-4">
                  <Button value="Login" submit fullWidth rounded />
                </div>
              </form>

              {/* Divider */}
              <div className="py-3 flex items-center text-dark text-sm before:flex-[1_1_0%] before:border-t before:border-dark before:me-6 after:flex-[1_1_0%] after:border-t after:border-dark after:ms-6">
                or
              </div>

              {/* Google sign in button */}
              <GoogleButton />

              {/* signup link for small device */}
              <div className="w-fit mx-auto mt-4 md:hidden text-dark">
                <Link to="/signup">
                  Don{"'"}t have an account?{" "}
                  <span className="text-sky">Create one</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
