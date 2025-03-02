
const MyBasic = (state,action) =>{
  let data ={
    "fullname":"",
    "dob":"",
    "gender":"",
    "married":"",
    "profilestatus":"",
    "about":""
  };

  let basicData=Object.assign(data,state);

  if(action.type==="basic"){
    basicData=action.info;
  }
  return basicData;
}
export default MyBasic;