import { useState } from "react";
import routes from "./routes";
import { RouterProvider } from "react-router";
import { Toaster } from "./components/ui/sonner";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" richColors/>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
