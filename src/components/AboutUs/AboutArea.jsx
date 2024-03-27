import { GiCheckMark } from "react-icons/gi";

const AboutArea = () => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
      {/* image */}
      <div className="bg-about w-full lg:w-[550px] xl:w-[675px] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[560px] bg-center bg-cover bg-no-repeat"></div>

      {/* content */}
      <div className="pl-4 lg:pl-8 xl:pl-[60px] xl:py-12 lg:max-w-[470px] xl:max-w-[552px]">
        <p className="text-primary font-medium">About Us</p>
        <h2 className="text-[32px] xl:text-[40px] lg:leading-[44px] xl:leading-[52px] font-semibold py-4 text-dark">
          Short Story of DocHub Since 1999
        </h2>
        <p className="text-ash leading-7 lg:text-sm xl:text-base">
          Since 1999, DocHub revolutionizes healthcare with innovative solutions
          and compassionate care, prioritizing patient well-being. Our
          two-decade legacy of excellence drives continuous improvement in
          medical services.
        </p>
        <ul className="text-ash mt-5 space-y-1 text-sm">
          <li className="flex items-center gap-3 group">
            <span className="text-primary group-hover:bg-primary group-hover:text-white p-2 group-hover:rounded-full transition-all duration-300">
              <GiCheckMark size={14} />
            </span>
            <span>Innovative healthcare solutions since 1999.</span>
          </li>
          <li className="flex items-center gap-3 group">
            <span className="text-primary group-hover:bg-primary group-hover:text-white p-2 group-hover:rounded-full transition-all duration-300">
              <GiCheckMark className="" />
            </span>
            <span>Compassionate care for patient well-being.</span>
          </li>
          <li className="flex items-center gap-3 group">
            <span className="text-primary group-hover:bg-primary group-hover:text-white p-2 group-hover:rounded-full transition-all duration-300">
              <GiCheckMark className="" />
            </span>
            <span>Legacy of excellence spanning two decades.</span>
          </li>
          <li className="flex items-center gap-3 group">
            <span className="text-primary group-hover:bg-primary group-hover:text-white p-2 group-hover:rounded-full transition-all duration-300">
              <GiCheckMark className="" />
            </span>
            <span>Continuous improvement in medical services.</span>
          </li>
          <li className="flex items-center gap-3 group">
            <span className="text-primary group-hover:bg-primary group-hover:text-white p-2 group-hover:rounded-full transition-all duration-300">
              <GiCheckMark className="" />
            </span>
            <span>Best healthcare with cutting-edge solutions.</span>
          </li>
          <li className="flex items-center gap-3 group">
            <span className="text-primary group-hover:bg-primary group-hover:text-white p-2 group-hover:rounded-full transition-all duration-300">
              <GiCheckMark className="" />
            </span>
            <span>Prioritizing patient care and well-being.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutArea;
