const MyContact = (state,action) =>{
  let data = {
     "mobile":"",
     "mail":"",
     "localaddress":"",
     "permanentaddress":"",
     "reference":""
  };
  let ContactData=Object.assign(data,state);
  if(action.type==="contact"){
    ContactData=action.info;
  }
  return ContactData;
}
export default MyContact;