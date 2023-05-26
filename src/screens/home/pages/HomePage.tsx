import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../commons/components/Navbar";
import Menubar from "../../../commons/components/Menubar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F3F3F3] w-full ">
      <Navbar />
      <div className="flex top-11 absolute bottom-0 w-full gap-8 overflow-x-hidden z-10">
        <Menubar />
        <div className="ml-96">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
