import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// icons
import { FcGoogle } from "react-icons/fc";

// hooks
import useAuth from "../../../hooks/useAuth";
import { saveUserToDB } from "../../../api/utils";

// components
import Button from "./Button";

const GoogleButton = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleLogIn = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result?.user;
      // console.log(user);
      if (user) {
        await saveUserToDB(user);
        toast.success("Login Successful!");

        // navigate user after successful google login
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error(error);
      toast.error("Login Failed!");
    }
  };

  return (
    <div onClick={handleGoogleLogIn}>
      <Button
        fullWidth
        dark
        Icon={FcGoogle}
        rounded
        value="Continue with Google"
        isLoading={false}
      />
    </div>
  );
};

export default GoogleButton;
