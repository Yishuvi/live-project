const MyExpirence = (state,action) =>{
  let data = {
    "totalexp":"",
    "abtexp":""
  };
  let ExpData=Object.assign(data,state)
  if(action.type==="expirence"){
    ExpData=action.info;
  }
  return ExpData;
}
export default MyExpirence;