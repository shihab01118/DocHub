import Lottie from "lottie-react";
import newsLetter from "../../../assets/animations/newsletter.json";
import Button from "../Button/Button";

const NewsLetter = () => {
  return (
    <section className="bg-[#EDF2FF] py-14 lg:py-0 lg:pt-10 lg:pb-6">
      <div className="max-w-6xl mx-auto px-4 lg:px-12 xl:px-0 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="max-w-lg text-center lg:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-dark mb-2">
            Subscribe for Newsletter
          </h2>
          <p className="text-[#757575] text-sm md:text-base leading-6">
            Stay informed with our newsletter subscription for the latest
            updates!
          </p>
          <div className="mt-5 flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="h-10 md:h-12 px-6 rounded-md bg-white focus:outline-none text-[#555] border border-[#ddd] focus:border-primary mr-3 w-full text-sm md:text-base"
            />
            <div>
              <Button value="Subscribe" />
            </div>
          </div>
        </div>
        <div className="lg:pr-20">
          <Lottie
            animationData={newsLetter}
            loop
            autoplay
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            className="w-[250px] h-[250px] md:w-[300px] md:h-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
