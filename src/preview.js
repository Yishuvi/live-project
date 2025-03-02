import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const FinalPreview= ()=>{
  let basicdata=useSelector(state=>state.MyBasic);
  let educationdata=useSelector(state=>state.MyEducation);
  let contactdata=useSelector(state=>state.MyContact);
  let skilldata=useSelector(state=>state.MySkills);
  let expdata=useSelector(state=>state.MyExpirence);
  let projectdata=useSelector(state=>state.MyProject)

  return(
    <div className="container mt-4">
       <div className="row">
            <div className="col-xl-6 mb-5">
                  <div className="card border-0 shadow-lg">
                      <div className="card card-header bg-info text-white">Basic Details</div>
                      <div className="card card-body">
                        <table className="table">
                          <tbody>
                            <tr><th>Full Name </th> <td> {basicdata.fullname}</td></tr>
                            <tr><th>Gender </th> <td> {basicdata.gender}</td></tr>
                            <tr><th>D.O.B</th> <td> {basicdata.dob}</td></tr>
                            <tr><th>Married </th> <td> {basicdata.married}</td></tr>
                            <tr><th>Profilestatus </th> <td> {basicdata.profilestatus}</td></tr>
                            <tr><th>About</th> <td> {basicdata.about}</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="card card-footer">
                      <Link to ="/basic"className="text-decoration-none"><i  className="fa fa-edit"></i> Edit </Link>
                      </div>
                  </div>
            </div>

            <div className="col-xl-6 mb-5">
                  <div className="card border-0 shadow-lg">
                      <div className="card card-header bg-info text-white">Contact Details</div>
                      <div className="card card-body">
                       <table className="table">
                        <tbody>
                          <tr><th>Mobile Number</th><td>{contactdata.mobile}</td></tr>
                          <tr><th>Email Id</th><td>{contactdata.mail}</td></tr>
                          <tr><th>Local Address</th><td>{contactdata.localaddress}</td></tr>
                          <tr><th>Permanent Address</th><td>{contactdata.permanentaddress}</td></tr>
                          <tr><th>Any Refrence : </th><td>{contactdata.reference}</td></tr>
                        </tbody>
                       </table>
                      </div>
                      <div className="card card-footer">
                      <Link to ="/contact"className="text-decoration-none"><i  className="fa fa-edit"></i> Edit </Link>
                      </div>
                    </div>  
            </div>

            <div className="col-xl-6 mb-5">
                  <div className="card border-0 shadow-lg">
                      <div className="card card-header bg-info text-white">Education Details</div>
                      <div className="card card-body">
                      <table className="table">
                         <tbody>
                          <tr><th>Highest Education</th> <td>{educationdata.highestEdu}</td></tr>
                          <tr><th>Passing Year</th><td>{educationdata.passingYear}</td></tr>
                          <tr><th>Grade</th><td>{educationdata.grade}</td></tr>
                          <tr><th>College/University</th><td>{educationdata.college}</td></tr>
                          <tr><th>City</th><td>{educationdata.city}</td></tr>
                         </tbody>
                        </table>
                      </div>
                      <div className="card card-footer">
                      <Link to ="/education"className="text-decoration-none"><i  className="fa fa-edit"></i> Edit </Link>
                      </div>
                    </div>  
            </div>

            <div className="col-xl-6 mb-5">
                  <div className="card border-0 shadow-lg">
                      <div className="card card-header bg-info text-white">Skill Details</div>
                      <div className="card card-body">
                        <table className="table">
                          <tbody>
                           <tr><th>Skills</th><td>{skilldata.skill}</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="card card-footer">
                      <Link to ="/skills"className="text-decoration-none"><i  className="fa fa-edit"></i> Edit </Link>
                      </div>
                     </div> 
            </div>

            <div className="col-xl-6 mb-5">
                  <div className="card border-0 shadow-lg">
                      <div className="card card-header bg-info text-white">Project Details</div>
                      <div className="card card-body">
                        <table className="table">
                          <tbody>
                            <tr><th>Project Name</th><td>{projectdata.projectname}</td></tr>
                            <tr><th>Project Details</th><td>{projectdata.projectdetails}</td></tr>
                            <tr><th>Technologies used</th><td>{projectdata.technology}</td></tr>
                            <tr><th>Live URL</th><td>{projectdata.url}</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="card card-footer">
                      <Link to ="/project"className="text-decoration-none"><i  className="fa fa-edit"></i> Edit </Link>
                      </div>
                     </div> 
            </div>

            <div className="col-xl-6 mb-5">
                  <div className="card border-0 shadow-lg">
                      <div className="card card-header bg-info text-white">Expirence Details</div>
                      <div className="card card-body">
                        <table className="table">
                          <tbody>
                            <tr><th>Total Expirence</th><td>{expdata.totalexp}</td></tr>
                            <tr><th>About Expirence</th><td>{expdata.abtexp}</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="card card-footer">
                      <Link to ="/expirence"className="text-decoration-none"><i  className="fa fa-edit"></i> Edit </Link>
                      </div>
                    </div>  
            </div>

            <div className="col-xl-12 text-center">
               <button className="btn btn-outline-danger">Submit My Details</button>
            </div>
       </div>
    </div>
  )
}
export default FinalPreview;