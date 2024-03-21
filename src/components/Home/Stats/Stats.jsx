import StatsCard from "./StatsCard";

// icons
import home_white from "../../../assets/icons/home-white.png";
import home from "../../../assets/icons/home.png";
import user_white from "../../../assets/icons/user-white.png";
import user from "../../../assets/icons/user.png";
import smile_white from "../../../assets/icons/smile-white.png";
import smile from "../../../assets/icons/smile.png";
import grid_white from "../../../assets/icons/grid-white.png";
import grid from "../../../assets/icons/grid.png";

const Stats = () => {
  return (
    <section className="bg-reliableHands py-16 lg:py-[120px] relative">
      {/* overlay */}
      <div className="bg-primary absolute inset-0 opacity-80 z-0"></div>

      {/* contents */}
      <div className="grid grid-cols-1 gap-10 w-fit md:grid-cols-2 lg:grid-cols-4 lg:w-auto lg:gap-0 max-w-6xl mx-auto px-4 lg:px-12 xl:px-0 relative z-10">
        <StatsCard
          img={home_white}
          imgHovered={home}
          count={3468}
          text="Hospital Rooms"
        />
        <StatsCard
          img={user_white}
          imgHovered={user}
          count={557}
          text="Specialist Doctors"
        />
        <StatsCard
          img={smile_white}
          imgHovered={smile}
          count={4379}
          text="Happy Patients"
        />
        <StatsCard
          img={grid_white}
          imgHovered={grid}
          count={32}
          text="Years of Experience"
        />
      </div>
    </section>
  );
};

export default Stats;
