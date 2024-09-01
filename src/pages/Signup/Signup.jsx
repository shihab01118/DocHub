import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

// icons
import { FiEye, FiEyeOff } from "react-icons/fi";

// hooks
import useAuth from "../../hooks/useAuth";
import { saveUserToDB } from "../../api/utils";

// components
import GoogleButton from "../../components/Shared/Button/GoogleButton";
import Logo from "../../components/Shared/Logo/Logo";
import Button from "../../components/Shared/Button/Button";

const Signup = () => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Please wait...");

    if (!checked) {
      setLoading(false);
      return toast.error("Please agree with our terms and conditions!");
    }

    try {
      const result = await createUser(data?.email, data?.password); // creating user with firebase
      const user = result?.user;
      if (user) {
        await saveUserToDB(user, data); // saving user to database
        toast.success("Registration Successful!", { id: toastId }); // showing a successful login toast
        navigate(from, { replace: true }); // navigating user after successful login
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Registration Failed!");
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>DocHub - Signup</title>
      </Helmet>
      <section className="min-h-screen relative">
        {/* Navbar */}
        <div className="max-w-6xl mx-auto py-3 px-2 md:flex justify-between items-center z-20 hidden">
          <Logo />
          <Link to="/login">
            <span className="text-xl font-light italic">
              Already have an account? Sign in
            </span>
          </Link>
        </div>

        {/* Logo for small screen */}
        <div className="absolute z-50 left-5 top-5 md:hidden">
          <Logo />
        </div>

        {/* Signup form */}
        <div className="flex items-center justify-center min-h-screen md:min-h-[calc(100vh-72px)] relative z-20">
          <div className="md:max-w-md w-full xs:flex xs:items-center xs:h-screen md:h-fit bg-white md:rounded-lg xs:p-4 sm:p-8 border border-[#eee] drop-shadow-sm">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-center text-3xl text-dark font-bold">
                Create Account
              </h2>

              {/* form */}
              <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                {/* Name field */}
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full h-12 px-6 rounded-full bg-white focus:outline-none text-[#555] border border-[#ddd] focus:border-primary"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-error text-sm md:text-[15px] ml-6">
                      Name required!
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div className="mt-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-12 px-6 rounded-full bg-white focus:outline-none text-[#555] border border-[#ddd] focus:border-primary"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-error text-sm md:text-[15px] ml-6">
                      Email required!
                    </span>
                  )}
                </div>

                {/* Password field */}
                <div className="mt-4 relative">
                  <input
                    type={visible ? "text" : "password"}
                    placeholder="Password"
                    className="w-full h-12 px-6 rounded-full bg-white focus:outline-none text-[#555] border border-[#ddd] focus:border-primary"
                    {...register("password", { required: true })}
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
                    className={`cursor-pointer border border-title rounded w-4 h-4 flex items-center justify-center ${
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
                  <span className="ml-2 text-title">
                    I accept all the terms and conditions.
                  </span>
                </div>

                {/* Signup button */}
                <div className="mt-5">
                  <Button
                    value="Sign Up"
                    submit
                    fullWidth
                    rounded
                    isLoading={loading}
                  />
                </div>
              </form>

              {/* Divider */}
              <div className="py-3 flex items-center text-title text-sm before:flex-[1_1_0%] before:border-t before:border-title before:me-6 after:flex-[1_1_0%] after:border-t after:border-title after:ms-6">
                or
              </div>

              {/* Google sign in button */}
              <GoogleButton />

              {/* signup link for small device */}
              <div className="w-fit mx-auto mt-4 md:hidden text-title">
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
