import { combineReducers } from "redux";

import MyBasic from "./basicreducer";
import MyContact from "./contactreducer";
import MyEducation from "./edureducer";
import MySkills from "./skillsreducer";
import MyProject from "./projectreducer";
import MyExpirence from "./expreducer";

const MainReducer =combineReducers({
  MyBasic,MyContact,MyEducation,MySkills,MyProject,MyExpirence
})
export default MainReducer;