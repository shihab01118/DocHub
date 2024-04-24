import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

// icons
import { FiEye, FiEyeOff } from "react-icons/fi";

// components
import GoogleButton from "../../components/Shared/Button/GoogleButton";
import Logo from "../../components/Shared/Logo/Logo";
import Button from "../../components/Shared/Button/Button";
import useAuth from "../../hooks/useAuth";
import { saveUserToDB } from "../../api/utils";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signInUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Logging In...");

    try {
      const result = await signInUser(data?.email, data?.password);
      const user = result?.user;
      await saveUserToDB(user);
      toast.success("Login Successful!", { id: toastId });
      navigate("/");
      setLoading(false);
    } catch (error) {
      toast.error("Invalid email/password!");
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>DocHub - Login</title>
      </Helmet>
      <section className="min-h-screen relative">
        {/* Navbar */}
        <div className="max-w-6xl mx-auto py-3 px-2 md:flex justify-between items-center z-20 hidden">
          <Logo />
          <Link to="/signup">
            <span className="text-xl font-light italic text-dark">
              Don{"'"}t have an account? Create one
            </span>
          </Link>
        </div>

        {/* Logo for small screen */}
        <div className="absolute z-50 left-5 top-5 md:hidden">
          <Logo />
        </div>

        {/* Login form */}
        <div className="flex items-center justify-center min-h-screen md:min-h-[calc(100vh-72px)] relative z-20">
          <div className="md:max-w-md w-full xs:flex xs:items-center xs:h-screen md:h-fit bg-white md:rounded-lg xs:p-4 sm:p-8 border border-[#eee] drop-shadow-sm">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-center text-3xl text-dark font-bold">
                Login
              </h2>

              {/* form */}
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                {/* Email field */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                    className="w-full h-12 px-6 rounded-full bg-white focus:outline-none text-[#555] border border-[#ddd] focus:border-primary"
                  />
                </div>
                {errors.email && (
                  <span className="text-error text-sm md:text-[15px] ml-6">
                    Email required!
                  </span>
                )}

                {/* Password field */}
                <div className="mt-5 relative">
                  <input
                    type={visible ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", { required: true })}
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
                {errors.password && (
                  <span className="text-error text-sm md:text-[15px] ml-6">
                    Password required!
                  </span>
                )}

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
                  <Button
                    value="Login"
                    submit
                    fullWidth
                    rounded
                    isLoading={loading}
                  />
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
