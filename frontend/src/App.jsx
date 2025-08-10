import { useState } from "react";
import routes from "./routes";
import { RouterProvider } from "react-router";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <Toaster  position="top-right" richColors/>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
