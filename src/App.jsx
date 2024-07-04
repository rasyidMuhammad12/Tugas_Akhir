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


function App() {
  return (
    <div>
      <NavbarComponen />
      <Routes>
        <Route path="/" Component={HomePages} />
        <Route path="/roadmaps" Component={RoadmapsPages} />
        <Route path="/category" Component={CategoryPages} />
        <Route path="/materi1html" Component={materi1html } />
        <Route path="/materi2html" Component={materi2html } />
        <Route path="/materi3html" Component={materi3html } />
        <Route path="/materi1css" Component={materi1css } />
        <Route path="/materi2css" Component={materi2css } />
        <Route path="/materi3css" Component={materi3css } />
        <Route path="/materi1js" Component={materi1js } />
        <Route path="/materi2js" Component={materi2js } />
        <Route path="/materi3js" Component={materi3js } />
      
      </Routes>
      <FooterComponen />
    </div>
  );
}

export default App;
