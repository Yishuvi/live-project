import { Link } from "react-router-dom";

const LeftNav = () =>{
   return(
    <ul className="list-group border-0 shadow-lg">
     <li className="list-group-item bg-dark text-white">Quick Links</li>
     <li className="list-group-item"><Link to ="/"className="text-decoration-none"><i className="fa fa-home"></i> Dashboard</Link></li>
     <li className="list-group-item"><Link to="/basic" className="text-decoration-none"><i className="fa fa-user"></i> My Basic</Link></li>
     <li className="list-group-item"><Link to="/contact" className="text-decoration-none"><i className="fa fa-headset"></i> My Contact</Link></li>
     <li className="list-group-item"><Link to="/education" className="text-decoration-none"><i className="fa fa-book"></i> My Education</Link></li>
     <li className="list-group-item"><Link to ="/skills" className="text-decoration-none"> <i className="fa fa-desktop"></i> My Skills</Link></li>
     <li className="list-group-item"><Link to="/project" className="text-decoration-none"> <i className="fa fa-suitcase"></i> My Project</Link></li>
     <li className="list-group-item"><Link to ="/expirence" className="text-decoration-none"> <i className="fa fa-file"></i> My Expirence</Link></li>
    </ul>
   )
}
export default LeftNav;