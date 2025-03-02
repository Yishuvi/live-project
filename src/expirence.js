import LeftNav from "./navigation";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
const Expirence = ()=>{
    let expdata=useSelector(state=>state.MyExpirence);
    let[totalexp,setTotalexp]=useState(expdata.totalexp);
    let[abtexp,setAbtexp]=useState(expdata.abtexp);

    let dispatch=useDispatch();
    const save = ()=>{
        let userinfo={
            "totalexp":totalexp,
             "abtexp":abtexp
        };
        let mydata={type:"expirence",info:userinfo}
        dispatch(mydata);
        alert("Your expirence data saved successfully");
    }
  return(
    <div className="container mt-4">
        <div className="row">
            <div className="col-xl-3 mb-4"><LeftNav/></div>
            <div className="col-xl-6 mb-4 ">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> <i class="fa-solid fa-user-graduate"></i> Experience Imformation </div>
                        <div className="card-body "> 
                            
                                
                                <div className="form-group row">
                                    <div className="mb-4 ">
                                    <label className="mb-2">Total Experience</label>
                                    <input  type="text" placeholder="Total Experience" className="form-control" onChange={obj=>setTotalexp(obj.target.value)} value={totalexp}/>
                                    </div>
                                    <div className="mb-4 ">
                                    <label className="mb-2">About Experience</label>
                                    <textarea  placeholder="About Experience" className="form-control" rows="3" cols="3" maxlength="400" onChange={obj=>setAbtexp(obj.target.value)} value={abtexp} ></textarea>
                                    </div>

                                    <div class="text-center pb-2">
                                      <button onClick={save} class="btn btn-danger me-3"> Save </button>
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
export default Expirence;