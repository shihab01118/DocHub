// icons
import flask from "../../assets/icons/flask.png";
import girl from "../../assets/icons/girl.png";
import tooth from "../../assets/icons/tooth1.png";
import doctor from "../../assets/icons/medical-assistance (1).png";

const MissionContent = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 lg:px-12 xl:px-0 flex flex-col lg:flex-row items-center gap-12 xl:gap-8">
      <div className="lg:w-1/2 lg:py-12">
        <p className="text-primary font-medium">Our Mission & Vision</p>
        <h2 className="text-[32px] xl:text-[40px] lg:leading-[44px] xl:leading-[52px] font-semibold py-4 text-dark xl:max-w-[480px]">
          Better Information, Better Health
        </h2>
        <p className="text-ash leading-7 lg:text-sm xl:text-base">
          Unlock the power of informed decisions and proactive healthcare
          management for enhanced well-being and a healthier future.
        </p>
        <div className="mt-6 grid xs:grid-cols-1 sm:grid-cols-2 gap-6">
          {cardItems?.map((item) => (
            <div key={item?.id} className="group">
              <div className="w-[50px] h-[50px] rounded-full bg-white shadow-md flex justify-center items-center mb-[10px]">
                <img
                  src={item?.icon}
                  alt={item?.title}
                  className="w-7 h-[30px]"
                />
              </div>
              <h3 className="text-dark font-semibold text-lg mb-[6px]">
                {item?.title}
              </h3>
              <p className="text-ash text-sm leading-6">{item?.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-mission w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[650px] xl:h-[700px] bg-center bg-cover bg-no-repeat"></div>
    </section>
  );
};

export default MissionContent;

const cardItems = [
  {
    id: 1,
    title: "Professional Staff",
    subtitle: "Expertise and compassion for your health needs, always.",
    icon: doctor,
  },
  {
    id: 2,
    title: "Newborn Care",
    subtitle: "Specialized care for your little one's health needs, assuredly.",
    icon: girl,
  },
  {
    id: 3,
    title: "Sufficient Lab Tests",
    subtitle:
      "Comprehensive diagnostics for accurate treatment, efficiently conducted.",
    icon: flask,
  },
  {
    id: 4,
    title: "Tooth Extraction",
    subtitle:
      "Gentle care for dental health concerns, with expertise and care.",
    icon: tooth,
  },
];
