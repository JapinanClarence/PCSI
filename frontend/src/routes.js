import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import MainLayout from "./layout/main";
import About from "./pages/ajis/About";
import AuthorGuidelines from "./pages/ajis/AuthorGuidelines";
import ManuscriptPreparation from "./pages/ajis/ManuscriptPreparation";
import EditorialBoard from "./pages/ajis/EditorialBoard";
import Deposition from "./pages/ajis/Deposition";
import SubmissionProcess from "./pages/ajis/SubmissionProcess";
import ReviewProcess from "./pages/ajis/ReviewProcess";
import AbstractingIndexing from "./pages/ajis/AbstractingIndexing";
import SubmitManuscript from "./pages/ajis/SubmitManuscript";
import StrategicInitiatives from "./pages/strategic-initiatives";
import Services from "./pages/services";
import NewsAndEvents from "./pages/news-events";
import Support from "./pages/support";
import AdminDashboard from "./pages/admin";
import AdminLayout from "./layout/admin";
import Publications from "./pages/admin/publications";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/services", Component: Services },
      { path: "/news-events", Component: NewsAndEvents },
      { path: "/support", Component: Support },
      {
        path: "/ajis",
        Component: MainLayout,
        children: [
          {
            path: "about",
            Component: About,
          },
          {
            path: "author-guidelines",
            Component: AuthorGuidelines,
          },
          {
            path: "manuscript-preparation",
            Component: ManuscriptPreparation,
          },
          {
            path: "editorial-board",
            Component: EditorialBoard,
          },
          {
            path: "deposition",
            Component: Deposition,
          },
          {
            path: "submission-process",
            Component: SubmissionProcess,
          },
          {
            path: "review-process",
            Component: ReviewProcess,
          },
          {
            path: "abstracting-indexing",
            Component: AbstractingIndexing,
          },
          {
            path: "submit-manuscript",
            Component: SubmitManuscript,
          },
        ],
      },
      {
        path: "strategic-initiatives",
        Component: StrategicInitiatives,
      },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      {
        path: "publications",
        Component: Publications,
      },
    ],
  },
]);
export default routes;
