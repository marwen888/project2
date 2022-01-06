import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delete_user } from "../../js/action/authAction";
import { edit_user } from "../../js/action/authAction";
import React, { useState } from "react";
import Modaledit from "./Modaledit";
//const getPerson =(s)=> {
// setEmail(s.email)
//setName(s.name)
//}

const Carduser = ({ s }) => {
  //const [name , setName]= useState("") ;
  //const [email , setEmail]= useState("") ;
  const dispatch = useDispatch();
  const deleteuser = () => {
    dispatch(delete_user(s._id));
  };
  const edituser = () => {
    dispatch(edit_user(s._id, {}));
  };
  return (
    <div
     style={{
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        Width: "60%",
        margin: " auto ",
        padding: "20px",
      }}
    >
      <p> name : {s.name}</p>
      <p> email : {s.email}</p>
      <p> role : {s.role}</p>
      <button onClick={deleteuser}> delete </button>
      {/* <button onClick={edituser}> edit </button> */}
      <Modaledit s={s} />
    </div>
  );
};

export default Carduser;
