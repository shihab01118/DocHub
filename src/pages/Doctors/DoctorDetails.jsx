import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

// components
import Banner from "../../components/Shared/Banner/Banner";
import SectionContainer from "../../components/Shared/Container/SectionContainer";
import NewsLetter from "../../components/Shared/NewsLetter/NewsLetter";

// icons
import { FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhoneVolume,
  FaTwitter,
} from "react-icons/fa6";

const DoctorDetails = () => {
  const { name } = useParams();
  const axiosPublic = useAxiosPublic();

  // loading doctors information
  const { data: docInfo } = useQuery({
    queryKey: ["docInfo", name],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/doctors/${name}`);
      return data;
    },
  });

  const formatLink = (link) => {
    if (link && !link.startsWith("http")) {
      return `http://${link}`;
    }
    return link;
  };

  return (
    <>
      <Helmet>
        <title>{`DocHub | ${name}`}</title>
      </Helmet>
      <section>
        <Banner heading="Doctor Details" pageTitle={name} />
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="drop-shadow-md rounded-lg bg-white">
              {/* doctor's image */}
              <img
                src={docInfo?.img}
                alt={name}
                className="rounded-t-lg w-full"
              />
              <div className="xs:p-5 sm:p-10 lg:p-5 xl:p-10">
                <h4 className="text-xl font-semibold text-dark mb-[30px]">
                  Contact Info
                </h4>

                {/* contact information */}
                <div className="space-y-[10px] text-[#2c2d3f] mb-6">
                  <div className="flex gap-2 items-center">
                    <FaPhoneVolume className="text-primary" />
                    <span className="text-dark text-sm md:text-[15px]">
                      <a href={`tel:${docInfo?.contact?.phone}`}>
                        {`Call: ${docInfo?.contact?.phone}`}
                      </a>
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FiMail className="text-primary" />
                    <span className="text-dark text-sm md:text-[15px]">
                      <a href={`mailto:${docInfo?.contact?.mail}`}>
                        {docInfo?.contact?.mail}
                      </a>
                    </span>
                  </div>
                  <div className="flex gap-2 md:items-center">
                    <FaLocationDot className="text-primary" />
                    <span className="text-dark text-sm md:text-[15px]">
                      {docInfo?.contact?.address}
                    </span>
                  </div>
                </div>

                {/* social media links */}
                <div className="mt-6 flex gap-[10px]">
                  <a
                    href={formatLink(docInfo?.links?.facebook)}
                    className="border border-[#c8c8c8] hover:border-transparent hover:bg-primary w-8 h-8 rounded-md flex justify-center items-center group transition-all duration-300"
                  >
                    <FaFacebookF className="text-[#757575] group-hover:text-white" />
                  </a>
                  <a
                    href={formatLink(docInfo?.links?.instagram)}
                    className="border border-[#c8c8c8] hover:border-transparent hover:bg-primary w-8 h-8 rounded-md flex justify-center items-center group transition-all duration-300"
                  >
                    <FaInstagram className="text-[#757575] group-hover:text-white" />
                  </a>
                  <a
                    href={formatLink(docInfo?.links?.twitter)}
                    className="border border-[#c8c8c8] hover:border-transparent hover:bg-primary w-8 h-8 rounded-md flex justify-center items-center group transition-all duration-300"
                  >
                    <FaTwitter className="text-[#757575] group-hover:text-white" />
                  </a>
                </div>

                {/* working hours */}
                <div className="mt-[30px]">
                  <h4 className="text-xl font-semibold text-dark mb-[30px]">
                    Working Hours
                  </h4>
                  <div className="space-y-[10px]">
                    {docInfo?.workingHours?.map((item) => (
                      <div
                        key={item?._id}
                        className="flex justify-between text-[15px] text-[#2c2d3f] text-sm md:text-[15px]"
                      >
                        <span>{item?.days}</span>
                        <span>{item?.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* information content */}
            <div className="col-span-2 lg:pl-[70px] pt-[60px]">
              <h2 className="text-3xl font-semibold text-dark">
                {docInfo?.name}
              </h2>
              <p className="text-[#757575] mt-[10px] mb-[5px] text-[22px]">
                {docInfo?.title}
              </p>
              <p>
                {docInfo?.degrees?.map((degree, index) => (
                  <span key={degree?._id} className="text-[#757575]">
                    {index === docInfo?.degrees.length - 1
                      ? degree
                      : `${degree}, `}
                  </span>
                ))}
              </p>

              {/* summary */}
              <div>
                <h3 className="text-primary font-semibold text-2xl my-6">
                  Summary
                </h3>
                <p className="text-[#757575] text-sm md:text-[15px] leading-6">
                  {docInfo?.summary?.part1}
                </p>
                <p className="text-[#757575] text-sm md:text-[15px] leading-6 mt-4">
                  {docInfo?.summary?.part2}
                </p>
              </div>

              {/* education */}
              <div>
                <h3 className="text-primary font-semibold text-2xl my-6">
                  Education
                </h3>
                <div className="space-y-[10px]">
                  {docInfo?.education
                    ?.slice()
                    .reverse()
                    .map((edu) => (
                      <p
                        key={edu?._id}
                        className="text-[#757575] text-sm md:text-[15px] leading-6"
                      >
                        {`${edu?.degree} (${edu?.year})`}
                      </p>
                    ))}
                </div>
              </div>

              {/* biography */}
              <div>
                <h3 className="text-primary font-semibold text-2xl my-6">
                  Biography
                </h3>
                <p className="text-[#757575] text-sm md:text-[15px] leading-6">
                  {docInfo?.biography?.part1}
                </p>
                <p className="text-[#757575] text-sm md:text-[15px] leading-6 mt-4">
                  {docInfo?.biography?.part2}
                </p>
                <p className="text-[#757575] text-sm md:text-[15px] leading-6 mt-4">
                  {docInfo?.biography?.part3}
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
        <NewsLetter />
      </section>
    </>
  );
};

export default DoctorDetails;
