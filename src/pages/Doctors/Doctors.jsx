import { Helmet } from "react-helmet-async";

import Banner from "../../components/Shared/Banner/Banner";
import SectionContainer from "../../components/Shared/Container/SectionContainer";
import Doctor from "../../components/Doctors/Doctor";
import NewsLetter from "../../components/Shared/NewsLetter/NewsLetter";

const Doctors = () => {
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
              <Doctor
                key={doc?.id}
                name={doc?.name}
                title={doc?.designation}
                image={doc?.image}
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

const doctors = [
  {
    id: 1,
    name: "Collis Molate",
    image: "https://i.ibb.co/FV6GjYJ/team1.webp",
    designation: "Surgeon",
  },
  {
    id: 2,
    name: "Domani Plavon",
    image: "https://i.ibb.co/KwmrZpZ/team2.webp",
    designation: "Cardiologist",
  },
  {
    id: 3,
    name: "John Mard",
    image: "https://i.ibb.co/bPX026J/team3.webp",
    designation: "Neurologist",
  },
  {
    id: 4,
    name: "Emily Johnson",
    image: "https://i.ibb.co/524TGX7/team5.jpg",
    designation: "Psychiatrist",
  },
  {
    id: 5,
    name: "John Wick",
    image: "https://i.ibb.co/VpGYDJy/team6.jpg",
    designation: "Orthopedic Surgeon",
  },
  {
    id: 6,
    name: "Sophia Rodriguez",
    image: "https://i.ibb.co/WPdxqVL/team4.webp",
    designation: "Oncologist",
  },
];
