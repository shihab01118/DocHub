import Button from "../../Shared/Button/Button";

const Emergency = () => {
  return (
    <section className="bg-paralax1 py-16 lg:py-24 bg-fixed bg-cover bg-center bg-no-repeat relative">
      {/* overlay */}
      <div className="bg-primary absolute inset-0 opacity-75 z-0"></div>

      {/* content */}
      <div className="w-full max-w-[288px] sm:max-w-[338px] md:max-w-[520px] lg:max-w-[475px] xl:max-w-[620px] mx-auto z-20 text-white relative">
        <h2 className="text-[22px] md:text-2xl lg:text-[32px] font-semibold mb-[10px] md:mb-3 lg:mb-6 text-center leading-8 md:leading-[46px]">
          Do you need Emergency Medical Care? Call @ 1234 56789
        </h2>
        <p className="text-sm md:text-base mt-4 text-center leading-6">
          In need of urgent medical attention? Contact us immediately at 1234
          56789 for emergency care.
        </p>
        <div className="flex gap-3 justify-center mt-6">
          <Button value="Contact Now" bordered />
          <Button value="Learn More" dark bordered />
        </div>
      </div>
    </section>
  );
};

export default Emergency;
