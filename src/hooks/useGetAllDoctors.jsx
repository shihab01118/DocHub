import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetAllDoctors = () => {
  const axiosPublic = useAxiosPublic();

  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const { data } = await axiosPublic("/doctors");
      return data;
    },
  });
  
  return { doctors, isLoading };
};

export default useGetAllDoctors;
