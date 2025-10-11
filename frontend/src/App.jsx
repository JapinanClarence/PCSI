import { useState } from "react";
import routes from "./routes";
import { RouterProvider } from "react-router";
import { Toaster } from "./components/ui/sonner";
import { AuthProvider } from "./contexts/AuthContext";
import ErrorBoundary from "./components/errors/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Toaster position="top-right" richColors/>
        <RouterProvider router={routes} />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
