import { HashRouter,Route,Routes } from "react-router-dom";

import FinalPreview from "./preview";
import BasicDetails from "./basic";
import EducationDetails from "./education";
import Skills from "./skill";
import ContactDetails from "./contact";
import Project from "./project";
import Expirence from "./expirence";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path = "/" element={<FinalPreview/>}/>
        <Route exact path ="/basic" element={<BasicDetails/>}/>
        <Route exact path = "/contact" element={<ContactDetails/>}/>
        <Route exact path ="/education" element={<EducationDetails/>}/>
        <Route exact path ="/skills" element={<Skills/>}/>
        <Route exact path ="/project" element={<Project/>}/>
        <Route exact path ="/expirence" element={<Expirence/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
