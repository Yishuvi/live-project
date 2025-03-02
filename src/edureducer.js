const MyEducation = (state,action) =>{
  let data = {
    "highestEdu":"",
     "passingYear":"",
     "grade":"",
     "college":"",
     "city":""
  };
   let EducationData=Object.assign(data,state)
   if(action.type==="education"){
     EducationData=action.info;
   }
  return EducationData;
}
export default MyEducation;