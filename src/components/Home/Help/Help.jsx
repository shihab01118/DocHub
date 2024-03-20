import SectionTitle from "../../Shared/Title/SectionTitle";
import HelpCard from "./HelpCard";

// icons
import ambulance from "../../../assets/icons/ambulance.png";
import ambulance_white from "../../../assets/icons/ambulance-white.png";
import medical from "../../../assets/icons/medical-symbol.png";
import medical_white from "../../../assets/icons/medical-symbol-white.png";
import stethoscope from "../../../assets/icons/doctor.png";
import stethoscope_White from "../../../assets/icons/doctor-white.png";

const Help = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 lg:px-12 xl:px-0 py-12 md:py-16 lg:py-24">
      <SectionTitle
        title="We Are Always Ready To Help You & Your Family"
        subtitle="Providing Compassionate Support for Every Aspect of Your Family's Needs and Beyond."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0">
        <HelpCard
          img={ambulance}
          imgHovered={ambulance_white}
          title="Emergency Help"
          subtitle="Access Urgent Assistance Quickly, Anytime, Anywhere, Without Hesitation."
        />
        <HelpCard
          img={medical}
          imgHovered={medical_white}
          title="Enriched Pharmecy"
          subtitle=" Trusted Partner for Comprehensive Pharmaceutical Solutions and Healthcare."
        />
        <HelpCard
          img={stethoscope}
          imgHovered={stethoscope_White}
          title="Medical Treatment"
          subtitle="Comprehensive Pharmaceutical Solutions and Holistic Healthcare Services for All."
        />
      </div>
    </section>
  );
};

export default Help;
