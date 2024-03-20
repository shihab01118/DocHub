import { FcGoogle } from "react-icons/fc";
import Button from "./Button";

const GoogleButton = () => {
  return (
    <>
      <Button
        fullWidth
        dark
        Icon={FcGoogle}
        rounded
        value="Continue with Google"
      />
    </>
  );
};

export default GoogleButton;
