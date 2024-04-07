import { Helmet } from "react-helmet-async";

import Banner from "../../components/Shared/Banner/Banner";
import SectionContainer from "../../components/Shared/Container/SectionContainer";
import DoctorCard from "../../components/Doctors/DoctorCard";
import NewsLetter from "../../components/Shared/NewsLetter/NewsLetter";
import useGetAllDoctors from "../../hooks/useGetAllDoctors";

const Doctors = () => {
  const { doctors } = useGetAllDoctors();

  return (
    <>
      <Helmet>
        <title>DocHub - Quality Doctors</title>
      </Helmet>
      <section>
        <Banner heading="Meet Our Qualified Doctors" pageTitle="Doctors" />
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {doctors?.map((doc) => (
              <DoctorCard
                key={doc?._id}
                name={doc?.name}
                title={doc?.title}
                image={doc?.img}
                address={`/appointment/${doc?.name}`}
              />
            ))}
          </div>
        </SectionContainer>
        <NewsLetter />
      </section>
    </>
  );
};

export default Doctors;
