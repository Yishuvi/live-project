import LeftNav from "./navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const BasicDetails =() =>{
   let basicdata=useSelector(state=>state.MyBasic);
   let [name,setName]=useState(basicdata.fullname);
   let[dob,setDob]=useState(basicdata.dob);
   let [gender,setGender]=useState(basicdata.gender);
   let [marriage,setMarriage] =useState(basicdata.married);
   let [profilestatus,setStatus]=useState(basicdata.profilestatus);
   let[about,setAbout]=useState(basicdata.about);

   let dispatch=useDispatch();
   const save = ()=>{
     let userinfo={
      "fullname":name,
      "dob":dob,
      "gender":gender,
      "married":marriage,
      "profilestatus":profilestatus,
      "about":about
     };
     let mydata={type:"basic",info:userinfo}
      dispatch(mydata);
      alert("Your Basic details saved successfully...");
   }
  return(
    <div className="container mt-4">
      <div className="row">
        <div className="col-xl-3 mb-4"><LeftNav/></div>
        <div className="col-xl-6 mb-4">
            <div className="card border-0 mb-4 shadow-lg p-4">
                <div className="card-header bg-info text-white text-center"> Basic Details </div>
                <div className="card-body"> 
                        
                  <h3 align="center" > Enter Your Details</h3>
                  Full Name : <input type="text" placeholder="Enter Your Name" className="form-control" onChange={obj=>setName(obj.target.value)} value={name}/>
                  Date : <input type="date" placeholder="Enter Your Date of Birth" className="form-control "onChange={obj=>setDob(obj.target.value)} value={dob}/>
                  Gender : <select className="form-control" onChange={obj=>setGender(obj.target.value)} value={gender}>
                                <option>Select</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                    Married : <select className="form-control" onChange={obj=>setMarriage(obj.target.value)} value={marriage}>
                                <option>Select</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                    Profile Status : <select className="form-control" onChange={obj=>setStatus(obj.target.value)} value={profilestatus}>
                                      <option>Select</option>
                                      <option>Active</option>
                                      <option>Inactive</option>
                                    </select>
                    About Yourself : <textarea placeholder="Write about yourself" className="form-control" maxLength={200} onChange={obj=>setAbout(obj.target.value)} value={about} ></textarea>

                </div>
                <div className="card-footer bg-secondary text-white text-center"> 
                    <button className="btn btn-warning mt-1" onClick={save} > Save & Continue </button>
                </div>
          </div>
         </div>
         <div className="col-xl-3 mb-4"></div> 
    </div>
</div>
  ) 
}
export default BasicDetails;