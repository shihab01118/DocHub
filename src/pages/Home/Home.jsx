import { Helmet } from "react-helmet-async";
import Banner from "../../components/Home/Banner/Banner";
import Display from "../../components/Home/Display/Display";
import Features from "../../components/Home/Features/Features";
import Stats from "../../components/Home/Stats/Stats";
import NewsLetter from "../../components/Shared/NewsLetter/NewsLetter";
import Services from "../../components/Home/Service/Services";
import Emergency from "../../components/Home/Emergency/Emergency";
import Portfoilio from "../../components/Home/Portfolio/Portfoilio";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DocHub - Home</title>
      </Helmet>
      <section>
        <Banner />
        <div className="lg:-mt-28 w-fit mx-auto mt-16 px-4 lg:px-12 xl:px-0">
          <Display />
        </div>
        <Features />
        <Stats />
        <Services />
        <Emergency />
        <Portfoilio />
        <NewsLetter />
      </section>
    </>
  );
};

export default Home;
