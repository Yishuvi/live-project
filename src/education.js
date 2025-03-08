import LeftNav from "./navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import swal from "sweetalert";
const EducationDetails = ()=>{
   let educationdata=useSelector(state=>state.MyEducation);
   let [highEdu,setEdu]=useState(educationdata.highestEdu);
   let [passYr,setYr]=useState(educationdata.passingYear);
   let[grade,setGrade]=useState(educationdata.grade);
   let[college,setCollege]=useState(educationdata.college);
   let[city,setCity]=useState(educationdata.city);

   let dispatch=useDispatch();
   const save = ()=>{
      let userinfo={
         "highestEdu":highEdu,
         "passingYear":passYr,
         "grade":grade,
         "college":college,
         "city":city
      };
      let mydata={type:"education",info:userinfo}
       dispatch(mydata);
       swal( "Save Success","Your Education details saved successfully...","success");
   }
   return(
      <div className="container mt-4">
      <div className="row">
          <div className="col-xl-3 mb-4"><LeftNav/></div>
          <div className="col-xl-6 mb-4 ">
                  <div className="card border-0 shadow-lg">
                      <div className="card-header bg-info text-white"> <i class="fa-solid fa-user-graduate"></i> Education Imformation </div>
                      <div className="card-body ">     
                              <div className="form-group row">

                                  <div className="mb-4">
                                  <label className="mb-2">Highest Education </label>
                                      <input type="text" placeholder="Highest Eduction" className="form-control" onChange={obj=>setEdu(obj.target.value)} value={highEdu}/>
                                  </div>

                                  <div className="mb-4">
                                  <label className="mb-2"> Passing Year</label>
                                      <input type="number" placeholder="Ex. 2012" className="form-control" onChange={obj=>setYr(obj.target.value)} value={passYr}/>
                                  </div>

                                  <div className="mb-4">
                                  <label className="mb-2" > Grade/Persentage (%)</label>
                                  <input type="text" placeholder="Grade/Persentage (%)" className="form-control" onChange={obj=>setGrade(obj.target.value)} value={grade}/>

                                  </div>

                                  <div className="mb-4 ">
                                  <label className="mb-2"> Collage / University</label>
                                  <input type="text" placeholder="Collage / University" className="form-control" onChange={obj=>setCollege(obj.target.value)} value={college}/>

                                  </div>

                                  <div className="mb-4 ">
                                  <label className="mb-2"> City</label>
                                  <input type="text" placeholder="City" className="form-control" onChange={obj=>setCity(obj.target.value)} value={city}/>
                                  </div>

                                  <div class="text-center pb-2">
                                    <button class="btn btn-danger me-3" onClick={save}> Save & Contiue </button>
                                  </div>
                              </div>
                        
                      </div>
                      
                  </div>
              </div>
          <div className="col-xl-3 mb-4"></div>
      </div>
  </div>  
   )
}
export default EducationDetails;