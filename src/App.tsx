import { Outlet } from "react-router-dom";

import ChatSidebar from "./components/shared/SideBar";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#0b0608]  to-[#121e2e] text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-3  relative">
          <ChatSidebar />
        </div>
        <div className="col-span-9 ">
          <div className="relative z-50">
            <Navbar />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
