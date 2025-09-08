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
import StrategicInitiatives from "./pages/strategic/StrategicInitiatives";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "ajis/about",
        Component: About,
      },
      {
        path: "ajis/author-guidelines",
        Component: AuthorGuidelines,
      },
      {
        path: "ajis/manuscript-preparation",
        Component: ManuscriptPreparation,
      },
      {
        path: "ajis/editorial-board",
        Component: EditorialBoard,
      },
      {
        path: "ajis/deposition",
        Component: Deposition,
      },
      {
        path: "ajis/submission-process",
        Component: SubmissionProcess,
      },
      {
        path: "ajis/review-process",
        Component: ReviewProcess,
      },
      {
        path: "ajis/abstracting-indexing",
        Component: AbstractingIndexing,
      },
      {
        path: "ajis/submit-manuscript",
        Component: SubmitManuscript,
      },
      {
        path: "strategic-initiatives",
        Component: StrategicInitiatives,
      },
    ],
  },
]);
export default routes;
