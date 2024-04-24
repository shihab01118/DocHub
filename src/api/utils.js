import { axiosPublic } from "../hooks/useAxiosPublic";

export const saveUserToDB = async (user, data) => {
  const newUser = {
    name: user?.displayName === null ? data?.name : user?.displayName,
    userId: user?.uid,
    email: user?.email,
    photo: user?.photoURL,
    role: "patient",
    createdAt: user?.metadata?.creationTime,
    lastSignInAt: user?.metadata?.lastSignInTime,
  };

  const response = await axiosPublic.post("/users", newUser);
  return response?.data;
};
