import { Helmet } from "react-helmet-async";
import Banner from "../../components/Home/Banner/Banner";
import Display from "../../components/Home/Display/Display";
import Features from "../../components/Home/Features/Features";
import Stats from "../../components/Home/Stats/Stats";

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
      </section>
    </>
  );
};

export default Home;
