import { FaAmbulance, FaClipboardList, FaRegClock } from "react-icons/fa";
import DisplayCard from "./DisplayCard";

const Display = () => {
  const text1 = (
    <p>
      When faced with critical situations, immediate action is not just crucial,
      but imperative for success.
    </p>
  );

  const text2 = (
    <p>
      Planning appointments with precision and foresight is essential for
      ensuring smooth operations.
    </p>
  );

  const schedule = (
    <div>
      <div className="flex justify-between">
        <p>Monday - Friday</p>
        <p>8.00-20.00</p>
      </div>
      <div className="flex justify-between">
        <p>Saturday</p>
        <p>9.00-18.30</p>
      </div>
      <div className="flex justify-between">
        <p>Monday - Thusday</p>
        <p>9.00-15.00</p>
      </div>
    </div>
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div>
        <DisplayCard
          title="Emergency Cases"
          subtitle="Responding Swiftly"
          Icon={FaAmbulance}
          content={text1}
        />
      </div>
      <div>
        <DisplayCard
          title="Efficient Scheduling"
          subtitle="Doctors Timetable"
          Icon={FaClipboardList}
          content={text2}
        />
      </div>
      <div className="md:col-span-2 lg:col-span-1
      ">
        <DisplayCard
          title="Opening Hours"
          subtitle="Convenient Access"
          Icon={FaRegClock}
          content={schedule}
        />
      </div>
    </section>
  );
};

export default Display;
