import { Link, Outlet, useNavigate } from "react-router";
import React from 'react'

function MainLayout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default MainLayout
