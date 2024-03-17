import { Helmet } from "react-helmet-async";
import Banner from "../../components/Home/Banner/Banner";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DocHub - Home</title>
      </Helmet>
      <section className="min-h-[2000px]">
        <Banner />
      </section>
    </>
  );
};

export default Home;
