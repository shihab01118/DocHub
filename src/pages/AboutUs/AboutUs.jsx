import { Helmet } from "react-helmet-async";
import Banner from "../../components/Shared/Banner/Banner";
import AboutArea from "../../components/AboutUs/AboutArea";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>DocHub - About Us</title>
      </Helmet>
      <section>
        <Banner heading="About Us" pageTitle="About Us" />
        <AboutArea />
      </section>
    </>
  );
};

export default AboutUs;
