import { FaTelegramPlane } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import SectionContainer from "../Shared/Container/SectionContainer";

const Cards = () => {
  return (
    <SectionContainer>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {items?.map((item) => (
          <div
            key={item?.id}
            className="bg-primary rounded-md px-6 py-12 flex text-white transform transition-transform hover:-translate-y-2 duration-300 hover:shadow-md"
          >
            <div className="mr-4 text-5xl">{item?.Icon()}</div>
            <div>
              <p className="text-2xl font-semibold">{item?.text1}</p>
              <p className="text-lg font-medium">{item?.text2}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Cards;

const items = [
  {
    id: 1,
    text1: "+880 1234 56789",
    text2: "support@dochub.com",
    Icon: FaTelegramPlane,
  },
  {
    id: 2,
    text1: "14 Gausul Azam Ave",
    text2: "Uttara, Dhaka",
    Icon: MdLocationPin,
  },
  {
    id: 3,
    text1: "Mon - Sat: 8am - 5pm",
    text2: "Sunday Closed",
    Icon: IoMdClock,
  },
];
