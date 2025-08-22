import { Link, Outlet, useNavigate } from "react-router";
import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div>
      <Navigation />
      <div className="pt-19">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;
