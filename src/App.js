import { HashRouter,Route,Routes ,Link} from "react-router-dom";

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

<nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
  <div className="container">
    <Link className="navbar-brand"> <i className="fa fa-user fa-lg"></i> Profile Management</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav ms-auto">

        <li className="nav-item me-3">
          <Link className="nav-link active" to = "/"> <i className="fa fa-home"></i> My Home</Link>
        </li>

        <li className="nav-item me-3">
          <Link className="nav-link active" to = "/basic"> <i className="fa fa-user"></i>Basic</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link active" to = "/contact"> <i className="fa fa-headset"></i>Contact</Link>
        </li>

        <li className="nav-item me-3">
          <Link className="nav-link active" to = "/education"> <i className="fa fa-book"></i>Education</Link>
        </li>

        <li className="nav-item me-3">
          <Link className="nav-link active" to = "/skills"> <i className="fa fa-desktop"></i> Skills</Link>
        </li>

        <li className="nav-item me-3">
          <Link className="nav-link active" to = "/project"> <i className="fa fa-suitcase"></i> Project</Link>
        </li>

        <li className="nav-item me-3">
          <Link className="nav-link active" to = "/expirence"> <i className="fa fa-file"></i> Expirence</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

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
