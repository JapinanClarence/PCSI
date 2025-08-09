import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import MainLayout from "./layout/main";

const routes = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children:[
            {index: true, Component: Home},
        ]
    }
]);
export default routes;