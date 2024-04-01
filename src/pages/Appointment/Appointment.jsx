import { Helmet } from "react-helmet-async";
import Banner from "../../components/Shared/Banner/Banner";
import NewsLetter from "../../components/Shared/NewsLetter/NewsLetter";
import SectionContainer from "../../components/Shared/Container/SectionContainer";
import appointmentImg from "../../assets/images/appointment2.jpg";
import AppointmentForm from "../../components/Appointment/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Helmet>
        <title>Dochub - Get Your Appointment</title>
      </Helmet>
      <section>
        <Banner heading="Get Your Appointment" pageTitle="Appointment" />
        <SectionContainer>
          <div className="lg:rounded-md lg:drop-shadow-md bg-white lg:flex ">
            <div className="hidden lg:block">
              <img
                src={appointmentImg}
                alt="appointment-img"
                className="lg:rounded-l-md h-full object-cover"
              />
            </div>
            <div className="lg:p-10">
              <div>
                <h2 className="text-[22px] md:text-[25px] font-semibold mb-[10px] text-dark">
                  Book Your Appointment
                </h2>
                <p className="text-[15px] text-ash">
                  We will confirm your appointment within 2 hours
                </p>
              </div>
              <div className="mt-[30px]">
                <AppointmentForm />
              </div>
            </div>
          </div>
        </SectionContainer>
        <NewsLetter />
      </section>
    </>
  );
};

export default Appointment;
