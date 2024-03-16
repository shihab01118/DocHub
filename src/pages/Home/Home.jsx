import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DocHub - Home</title>
      </Helmet>
      <section className="min-h-[2000px] bg-gray-light">
        <h3> Hello, I am Home.</h3>
      </section>
    </>
  );
};

export default Home;
