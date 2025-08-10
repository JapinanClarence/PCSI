import { Link, Outlet, useNavigate } from "react-router";
import React from "react";
import Navigation from "./Navigation";

function MainLayout() {
  return (
    <div>
      <Navigation />
      <div className="pt-19">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
