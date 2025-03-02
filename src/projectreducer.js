const MyProject = (state,action) =>{
  let data = {
    "projectname":"",
    "projectdetails":"",
    "technology":"",
    "url":""
  };
  let ProjectData=Object.assign(data,state);
  if(action.type==="project"){
    ProjectData=action.info;
  }
  return  ProjectData;
}
export default MyProject;