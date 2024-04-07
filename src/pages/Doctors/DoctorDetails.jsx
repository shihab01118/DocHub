import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import Banner from "../../components/Shared/Banner/Banner";
import SectionContainer from "../../components/Shared/Container/SectionContainer";
import NewsLetter from "../../components/Shared/NewsLetter/NewsLetter";
import { MdPhoneAndroid } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

const DoctorDetails = () => {
  const { name } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: docInfo } = useQuery({
    queryKey: ["docInfo"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/doctors/${name}`);
      return data;
    },
  });

  console.log(docInfo);
  return (
    <>
      <Helmet>
        <title>{`DocHub | ${name}`}</title>
      </Helmet>
      <section>
        <Banner heading="Doctor Details" pageTitle={name} />
        <SectionContainer>
          <div className="grid lg:grid-cols-3">
            <div className="drop-shadow-md rounded-lg bg-white">
              <img src={docInfo?.img} alt={name} className="rounded-t-lg" />
              <div className="p-12">
                <h4 className="text-xl font-semibold text-dark mb-[30px]">
                  Contact Info
                </h4>
                <div className="space-y-[10px]">
                  <div className="flex gap-2 items-center">
                    <MdPhoneAndroid className="text-primary text-xl" />
                    <span className="text-dark">
                      <a href={`tel:${docInfo?.contact?.phone}`}>
                        {docInfo?.contact?.phone}
                      </a>
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FiMail className="text-primary" />
                    <span className="text-dark">
                      <a href={`mailto:${docInfo?.contact?.mail}`}>
                        {docInfo?.contact?.mail}
                      </a>
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaLocationDot className="text-primary" />
                    <span className="text-dark">
                      {docInfo?.contact?.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2"></div>
          </div>
        </SectionContainer>
        <NewsLetter />
      </section>
    </>
  );
};

export default DoctorDetails;
