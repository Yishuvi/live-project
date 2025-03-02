const MySkills = (state,action) =>{
  let data = {
    "skill":""
  };
  let SkillData=Object.assign(data,state)
  if(action.type==="skill"){
    SkillData=action.info
  }
  return SkillData;
}
export default MySkills;