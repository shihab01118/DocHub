import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

// clients
import client1 from "../../../assets/logos/client1.webp";
import client2 from "../../../assets/logos/client2.webp";
import client3 from "../../../assets/logos/client3.webp";
import client4 from "../../../assets/logos/client4.webp";
import client5 from "../../../assets/logos/client5.webp";

const Partners = () => {
  const clients = [client1, client2, client3, client4, client5];
  return (
    <section className="bg-reliableHands py-16 lg:py-24 relative">
      {/* overlay */}
      <div className="bg-primary absolute inset-0 opacity-75 z-0"></div>

      {/* content */}
      <div className="max-w-6xl mx-auto px-4 lg:px-12 xl:px-0 relative z-10">
        <Marquee autoFill pauseOnHover speed={40}>
          {clients.map((client, idx) => (
            <Link to="" key={idx}>
              <img src={client} alt={client.toString()} className="px-10" />
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
