import { Helmet } from "react-helmet-async";
import Banner from "../../components/Home/Banner/Banner";
import Display from "../../components/Home/Display/Display";
import Help from "../../components/Home/Help/Help";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DocHub - Home</title>
      </Helmet>
      <section className="min-h-[2000px]">
        <Banner />
        <div className="lg:-mt-28 w-fit mx-auto mt-16 px-4 lg:px-12 xl:px-0">
          <Display />
        </div>
        <Help />
      </section>
    </>
  );
};

export default Home;
