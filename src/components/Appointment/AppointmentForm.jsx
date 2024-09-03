import { useState } from "react";
import DatePicker from "react-datepicker";
import Button from "../Shared/Button/Button";

const AppointmentForm = () => {
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [gender, setGender] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [dateOfAppointment, setDateOfAppointment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [description, setDescription] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleCancel = () => {
    setPatientName("");
    setPatientAge("");
    setGender("");
    setPatientEmail("");
    setContactNumber("");
    setPatientAddress("");
    setDateOfAppointment("");
    setSelectedDoctor("");
    setDescription("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h4 className="text-lg font-medium text-dark mb-4">Patient Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* name field */}
          <div className="relative  w-full rounded-lg">
            <input
              className="peer rounded-lg border border-[#ddd] focus:border-primary px-4 py-2 text-[#666] focus:outline-none text-[15px] w-full"
              type="text"
              placeholder=""
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
            <label
              className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-[#666] duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-[10px]  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-primary"
              htmlFor=""
            >
              Name<span className="text-error">*</span>
            </label>
          </div>

          <div className="relative w-full rounded-lg">
            <input
              className="peer rounded-lg border border-[#ddd] focus:border-primary px-4 py-2 text-[#666] focus:outline-none text-[15px] w-full"
              type="text"
              placeholder=""
              value={patientAge}
              onChange={(e) => setPatientAge(e.target.value)}
            />
            <label
              className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-[#666] duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-[10px]  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-primary"
              htmlFor=""
            >
              Age<span className="text-error">*</span>
            </label>
          </div>

          {/* gender field */}
          <div className="lg:-mt-1">
            <label className="text-sm md:text-[15px] font-medium text-dark">
              Gender<span className="text-error">*</span>
            </label>
            <div className="mt-2 lg:mt-0">
              <label className="mr-5 text-sm md:text-[15px] text-[#666]">
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  className="mr-2"
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                />
                Male
              </label>
              <label className="text-sm md:text-[15px] text-[#666]">
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  className="mr-2"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                />
                Female
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-4">
          {/* email field */}
          <div className="relative  w-full rounded-lg">
            <input
              className="peer rounded-lg border border-[#ddd] focus:border-primary px-4 py-2 text-[#666] focus:outline-none text-[15px] w-full"
              type="email"
              placeholder=""
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
            />
            <label
              className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-[#666] duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-[10px]  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-primary"
              htmlFor=""
            >
              Email<span className="text-error">*</span>
            </label>
          </div>

          {/* phone field */}
          <div className="relative  w-full rounded-lg">
            <input
              className="peer rounded-lg border border-[#ddd] focus:border-primary px-4 py-2 text-[#666] focus:outline-none text-[15px] w-full"
              type="text"
              placeholder=""
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <label
              className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-[#666] duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-[10px]  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-primary"
              htmlFor=""
            >
              Phone<span className="text-error">*</span>
            </label>
          </div>
        </div>

        {/* address field */}
        <div className="relative rounded-lg mt-5">
          <textarea
            className="peer rounded-lg border border-[#ddd] focus:border-primary px-4 py-2 text-[#666] focus:outline-none text-[15px] w-full"
            type="text"
            placeholder=""
            value={patientAddress}
            onChange={(e) => setPatientAddress(e.target.value)}
          ></textarea>
          <label
            className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-[#666] duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-[10px]  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-primary"
            htmlFor=""
          >
            Address<span className="text-error">*</span>
          </label>
        </div>

        <div className="mt-[30px]">
          <h4 className="text-lg font-medium text-dark mb-4">
            Appointment Details
          </h4>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* date-time field */}
            <div className="relative  w-full rounded-lg z-50">
              <div className="peer">
                <DatePicker
                  selected={dateOfAppointment}
                  onChange={(date) => setDateOfAppointment(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="rounded-lg border border-[#ddd] focus:border-primary px-4 py-2 text-[#666] focus:outline-none text-[15px] w-[350px] lg:w-[300px] xl:w-[350px]"
                  placeholderText=""
                />
              </div>
              <label
                className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-[#666] duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-[10px]  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-primary"
                htmlFor=""
              >
                Date of Appointment<span className="text-error">*</span>
              </label>
            </div>

            {/* doctor selection field */}

            <div className="w-full flex items-center relative">
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full border border-[#ddd] rounded-lg focus:border-primary px-4 py-2 text-[#666] focus:outline-none text-[15px] peer"
              >
                <option value="">Select One</option>
                {doctors?.map((doctor) => (
                  <option key={doctor?.id} value={doctor?.name}>
                    {doctor?.name}
                  </option>
                ))}
              </select>
              <label
                className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-[#666] duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-[10px]  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-primary"
                htmlFor=""
              >
                Consulting Doctor<span className="text-error">*</span>
              </label>
            </div>
          </div>

          {/* Note field */}
          <div className="relative rounded-lg mb-6">
            <textarea
              className="peer rounded-lg border border-[#ddd] focus:border-primary px-4 py-2 text-[#666] focus:outline-none text-[15px] w-full"
              type="text"
              placeholder=""
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label
              className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-[#666] duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-[10px]  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-primary"
              htmlFor=""
            >
              Add Note<span className="text-error">*</span>
            </label>
          </div>

          {/* buttons */}
          <div className="flex gap-4 z-0">
            <Button value="Submit" submit />
            <div>
              <button
                type="reset"
                onClick={handleCancel}
                className={`xs:text-sm sm:text-base md:text-xl px-5 py-[6px] md:py-[10px] text-dark relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-md bg-[#ccc]`}
              >
                <span className="absolute bg-dark w-0 h-14 group-hover:w-[250px] group-hover:h-[250px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-x-100 scale-x-0 -z-10 group-hover:duration-700 duration-500 origin-center transition-all"></span>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AppointmentForm;

const doctors = [
  {
    id: 1,
    name: "Collis Molate",
    image: "https://i.ibb.co/FV6GjYJ/team1.webp",
    designation: "Surgeon",
  },
  {
    id: 2,
    name: "Domani Plavon",
    image: "https://i.ibb.co/KwmrZpZ/team2.webp",
    designation: "Cardiologist",
  },
  {
    id: 3,
    name: "John Mard",
    image: "https://i.ibb.co/bPX026J/team3.webp",
    designation: "Neurologist",
  },
  {
    id: 4,
    name: "Emily Johnson",
    image: "https://i.ibb.co/524TGX7/team5.jpg",
    designation: "Psychiatrist",
  },
  {
    id: 5,
    name: "John Wick",
    image: "https://i.ibb.co/VpGYDJy/team6.jpg",
    designation: "Orthopedic Surgeon",
  },
  {
    id: 6,
    name: "Sophia Rodriguez",
    image: "https://i.ibb.co/WPdxqVL/team4.webp",
    designation: "Oncologist",
  },
];
