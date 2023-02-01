import React from "react";
import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa";
const Icon = (props) => {
  return (
    <>
      {props.icon === "empty" ? (
        <FaPen className="icon"/>
      ) : props.icon === "circle" ? (
        <FaRegCircle className="icon"/>
      ) : (
        <FaTimes className="icon"/>
      )}
    </>
  );
};
export default Icon;
