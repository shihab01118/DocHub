import { Helmet } from "react-helmet-async";
import Banner from "../../components/Shared/Banner/Banner";
import NewsLetter from "../../components/Shared/NewsLetter/NewsLetter";
import SectionContainer from "../../components/Shared/Container/SectionContainer";
import PricingCard from "../../components/Pricing/PricingCard";

// icons
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { BsHeartPulseFill } from "react-icons/bs";
import Partners from "../../components/Home/Partners/Partners";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Dochub - Pricing</title>
      </Helmet>
      <section>
        <Banner heading="Our Pricing" pageTitle="Our Pricing" />
        <div className="bg-[#F9F9F9]">
          <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {pricingList?.map((item) => (
                <PricingCard
                  key={item?.id}
                  Icon={item?.plan?.Icon}
                  planTitle={item?.plan?.name}
                  price={item?.price}
                  desc={item?.description}
                  features={item?.features}
                />
              ))}
            </div>
          </SectionContainer>
        </div>
        <Partners />
        <NewsLetter />
      </section>
    </>
  );
};

export default Pricing;

const pricingList = [
  {
    id: 1,
    plan: { name: "Basic Checkup", Icon: MdOutlineHealthAndSafety },
    price: "$50",
    features: [
      "Medical examination",
      "Blood pressure monitoring",
      "General health assessment",
      "Immunization check",
      "Dietary advice",
      "Fitness assessment",
    ],
  },
  {
    id: 2,
    plan: { name: "Health Screening", Icon: FiFileText },
    price: "$150",
    features: [
      "Blood tests",
      "ECG (Electrocardiogram)",
      "Consultation with a physician",
      "Cholesterol screening",
      "Diabetes screening",
      "Thyroid function test",
    ],
  },
  {
    id: 3,
    plan: { name: "Cardiology Package", Icon: BsHeartPulseFill },
    price: "$300",
    features: [
      "Stress tests",
      "Echocardiogram",
      "Consultation with a cardiologist",
      "Blood pressure management",
      "Heart rhythm monitoring",
      "Cardiac rehabilitation program",
    ],
  },
];
