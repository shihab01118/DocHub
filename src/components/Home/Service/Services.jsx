import SectionContainer from "../../Shared/Container/SectionContainer";
import SectionTitle from "../../Shared/Title/SectionTitle";
import ServiceCard from "./ServiceCard";

// icons
import prescription from "../../../assets/icons/prescription.png";
import tooth from "../../../assets/icons/tooth.png";
import heart from "../../../assets/icons/heart.png";
import ear from "../../../assets/icons/ear.png";
import eye from "../../../assets/icons/eye.png";
import bloodbag from "../../../assets/icons/bloodbag.png";

const Services = () => {
  return (
    <SectionContainer>
      <SectionTitle
        title="We Offer Different Services To Improve Your Health"
        subtitle="Explore Our Range of Health Services Tailored to Enhance Your Well-being"
      />
      <div className="space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => (
            <ServiceCard
              key={service?.id}
              img={service?.img}
              title={service?.title}
              description={service?.description}
              address={service?.address}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Services;

const services = [
  {
    id: 1,
    title: "General Treatment",
    description:
      "Comprehensive care for your health needs, tailored to your individual wellness goals.",
    img: prescription,
    address: "",
  },
  {
    id: 2,
    title: "Teeth Whitening",
    description:
      "Brighten your smile with our professional teeth whitening treatments for a dazzling, confident grin.",
    img: tooth,
    address: "",
  },
  {
    id: 3,
    title: "Heart Surgery",
    description:
      "Advanced cardiac procedures for not only optimal heart health but also improved quality of life.",
    img: heart,
    address: "",
  },
  {
    id: 4,
    title: "Ear Treatment",
    description:
      "Expert care for ear-related concerns, ensuring comfort and optimal hearing health.",
    img: ear,
    address: "",
  },
  {
    id: 5,
    title: "Vision Problems",
    description:
      "Specialized solutions for clearer vision and improved eye health, enhancing your overall well-being.",
    img: eye,
    address: "",
  },
  {
    id: 6,
    title: "Blood Transfusion",
    description:
      "Life-saving transfusions for replenishing blood levels and supporting overall health and vitality. ",
    img: bloodbag,
    address: "",
  },
];
