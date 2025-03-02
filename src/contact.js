import LeftNav from "./navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const ContactDetails = ()=>{
    let contactdata=useSelector(state=>state.MyContact);
    let [mobile,setmobile]=useState(contactdata.mobile);
    let[mail,setmail]=useState(contactdata.mail);
    let[local,setLocal]=useState(contactdata.localaddress);
    let[permanent,setPermanent]=useState(contactdata.permanentaddress);
    let[ref,setRef]=useState(contactdata.reference);

    let dispatch=useDispatch();
    const save = ()=>{
        let userinfo={
            "mobile":mobile,
            "mail":mail,
            "localaddress":local,
            "permanentaddress":permanent,
            "reference":ref
        };
        let mydata={type:"contact",info:userinfo}
         dispatch(mydata);
         alert("Your Contact details saved successfully...");
    }
  return(
    <div className="container mt-4">
    <div className="row">
        <div className="col-xl-3 mb-4"><LeftNav/></div>
        <div className="col-xl-6 mb-4 ">
                <div className="card border-0 shadow-lg">
                    <div className="card-header bg-info text-white"> <i class="fa fa-headset" aria-hidden="true"></i> Contact Imformation </div>
                    <div className="card-body "> 
                        
                            
                            <div className="form-group row">

                                <div className="mb-4">
                                <label className="mb-2"> Mobile Number </label>
                                    <input type="number" placeholder="Mobile No" className="form-control" onChange={obj=>setmobile(obj.target.value)} value={mobile}/>
                                </div>

                                <div className="mb-4">
                                <label className="mb-2"> Email Id</label>
                                    <input type="email" placeholder="Example@gmail.com" className="form-control" onChange={obj=>setmail(obj.target.value)} value={mail}/>
                                </div>

                                <div className="mb-4">
                                <label className="mb-2" > Local Address</label>
                                <textarea placeholder="Local Address" className="form-control" rows="3" cols="3" onChange={obj=>setLocal(obj.target.value)} value={local}></textarea>
                                </div>

                                <div className="mb-4 ">
                                <label className="mb-2"> Permanent Address</label>
                                <textarea placeholder="Permanent Address" onChange={obj=>setPermanent(obj.target.value)} value={permanent} className="form-control" rows="3" cols="3"  ></textarea>

                                </div>

                                <div className="mb-4 ">
                                <label className="mb-2"> Any Refrence Address and Contact</label>
                                <textarea placeholder="Other Contact" className="form-control" rows="3" cols="3" onChange={obj=>setRef(obj.target.value)} value={ref} ></textarea>

                                </div>

                                <div class="text-center pb-2">
                                  <button class="btn btn-danger me-3"onClick={save}> Save & Contiue </button>
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
export default ContactDetails;