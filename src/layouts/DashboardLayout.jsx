import { Outlet } from "react-router-dom";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import Topbar from "../components/Shared/Topbar/Topbar";

const DashboardLayout = () => {
  return (
    <section>
      <Topbar />
      <div className="flex bg-[#f5f5f6] min-h-screen pt-[88px]">
        <div>
          <Sidebar />
        </div>
        <div className="w-full px-[30px]">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
