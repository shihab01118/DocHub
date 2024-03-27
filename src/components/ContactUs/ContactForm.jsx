import contact from "../../assets/backgrounds/contact.jpg";
import Button from "../Shared/Button/Button";

const ContactForm = () => {
  return (
    <section className="lg:rounded-md md:drop-shadow-md bg-white max-w-6xl mx-4 lg:mx-12 xl:mx-auto mt-12 md:mt-16 lg:mt-24">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        <div className="lg:w-1/2">
          <img
            src={contact}
            alt="contact-img"
            className="lg:rounded-l-md h-full object-cover"
          />
        </div>
        <div className="md:px-10 md:py-12">
          <h3 className="text-dark text-[32px] font-semibold pb-4 mb-3 relative">
            Contact With Us
            <span className="bg-primary h-[2px] w-12 absolute left-0 bottom-0"></span>
          </h3>
          <p className="text-ash text-[15px]">
            If you have any questions please fell free to contact with us.
          </p>
          <form className="mt-10 md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-11 border border-lightAsh rounded focus:outline-none focus:border-primary px-4 text-sm placeholder-ash text-ash"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-11 border border-lightAsh rounded focus:outline-none focus:border-primary px-4 text-sm placeholder-ash text-ash"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full h-11 border border-lightAsh rounded focus:outline-none focus:border-primary px-4 text-sm placeholder-ash text-ash"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full h-11 border border-lightAsh rounded focus:outline-none focus:border-primary px-4 text-sm placeholder-ash text-ash"
            />
            <textarea
              className="w-full border border-lightAsh rounded focus:outline-none focus:border-primary px-4 py-3 text-sm placeholder-ash text-ash col-span-2 "
              rows="4"
              placeholder="Your Message"
            ></textarea>
            <div className="col-span-2">
              <Button value="Send" fullWidth />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
