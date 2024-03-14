import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  return (
    <button className="w-full h-11 border border-sky rounded-full px-6 bg-white/10 flex items-center justify-evenly text-sky font-medium transition-all hover:bg-white/30 active:scale-95">
      <FcGoogle size={26} />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleButton;
