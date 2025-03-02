import LeftNav from "./navigation";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
const Project=()=>{
    let projectdata=useSelector(state=>state.MyProject)

    let[projectname,setName]=useState(projectdata.projectname);
    let[projectdetail,setDetail]=useState(projectdata.projectdetais);
    let[tech,setTech]=useState(projectdata.technology);
    let[url,setUrl]=useState(projectdata.url);

    let dispatch=useDispatch();
    const save= () =>{
        let userinfo={
            "projectname":projectname,
            "projectdetails":projectdetail,
            "technology":tech,
            "url":url
        };
        let mydata={type:"project",info:userinfo}
        dispatch(mydata);
        alert("Your Project details saved successfully....")
    }
 return(
   <div className="container mt-4">
   <div className="row">
       <div className="col-xl-3 mb-4"><LeftNav/></div>
       <div className="col-xl-6 mb-4 ">
               <div className="card border-0 shadow-lg">
                   <div className="card-header bg-info text-white"> <i class="fa-solid fa-user-graduate"></i> Project Imformation </div>
                   <div className="card-body "> 
                       
                           
                           <div className="form-group row">

                               <div className="mb-4">
                               <label className="mb-2">Project Name </label>
                                   <input type="text" placeholder="Project Name" className="form-control" onChange={obj=>setName(obj.target.value)} value={projectname}/>
                               </div>

                               <div className="mb-4">
                               <label className="mb-2"> Project Details</label>
                               <textarea  placeholder="Project Details" className="form-control" onChange={obj=>setDetail(obj.target.value)} value={projectdetail}></textarea>
                               </div>

                               <div className="mb-4">
                               <label className="mb-2" > Technology </label>
                               <textarea  placeholder="Technology" onChange={obj=>setTech(obj.target.value)} value={tech} className="form-control"></textarea>

                               </div>

                               <div className="mb-4 ">
                               <label className="mb-2"> Live Project Url</label>
                               <input type="text" placeholder="Url" onChange={obj=>setUrl(obj.target.value)} value={url} className="form-control"/>

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
export  default Project;