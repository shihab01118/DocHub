import { Helmet } from "react-helmet-async";
import Banner from "../../components/Shared/Banner/Banner";
import AboutArea from "../../components/AboutUs/AboutArea";
import VisionArea from "../../components/AboutUs/VisionArea";
import NewsLetter from "../../components/Shared/NewsLetter/NewsLetter";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>DocHub - About Us</title>
      </Helmet>
      <section>
        <Banner heading="About Us" pageTitle="About Us" />
        <AboutArea />
        <VisionArea />
        <NewsLetter />
      </section>
    </>
  );
};

export default AboutUs;
