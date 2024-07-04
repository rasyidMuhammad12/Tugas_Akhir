import NavbarComponen from "./components/NavbarComponen";
import FooterComponen from "./components/FooterComponen";
import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import RoadmapsPages from "./pages/RoadmapsPages";
import CategoryPages from "./pages/CategoryPages";
import materi1html from "./pages/materi1html";
import materi2html from "./pages/materi2html";
import materi3html from "./pages/materi3html";
import materi1css from "./pages/materi1css";
import materi2css from "./pages/materi2css";
import materi3css from "./pages/materi3css";
import materi1js from "./pages/materi1js";
import materi2js from "./pages/materi2js";
import materi3js from "./pages/materi3js";
import ajax from "./pages/ajax";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Tugas_Akhir",
        element: <HomePages />,
      },
      {
        path: "/Tugas_Akhir/category",
        element: <CategoryPages />,
      },
      {
        path: "/Tugas_Akhir/Roadmaps",
        element: <RoadmapsPages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);