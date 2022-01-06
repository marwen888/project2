import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delete_station } from "../../js/action/authAction";
import { edit_station } from "../../js/action/authAction";
import Modaleditst from "./Modaleditst";
import React, { useState } from "react";

const Cardstation = ({ s }) => {
  const dispatch = useDispatch();
  const deletestation = () => {
    dispatch(delete_station(s._id));
  };
  const editstation = () => {
    dispatch(edit_station(s._id));
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
      <p> code :{s.code}</p>
      <p> nombre de pompes: {s.pumpnumber}</p>
      <p> type de pompes :{s.pumptype}</p>
      <p> dernier intervention :{s.intervention}</p>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          onClick={deletestation}
          style={{
            color: "white",
            borderRadius: "3px",
            backgroundColor: "blue",
            padding: "6px 14px",
          }}
        >
          {" "}
          delete{" "}
        </button>
        <Modaleditst s={s} />
      </div>
    </div>
  );
};

export default Cardstation;
