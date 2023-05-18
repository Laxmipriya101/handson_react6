import React, { useContext } from "react";
import store from "./StoreComponent";
import { useNavigate } from "react-router-dom";

function NewStudent() {
  const ContextData = useContext(store);
  const Navi = useNavigate();
  const NewObj = {
    name: "",
    Age: "",
    Course: "",
    Batch: "",
  };
  const handleChange = (e) => {
    NewObj[e.target.name] = e.target.value;
  };
  const handleClick = () => {
    ContextData.entries.push(NewObj);
    Navi("/Student");
    console.log(ContextData);
  };
  return (
    <div className="text">
      <br />
      <input name="name" placeholder="Enter Name" onChange={handleChange} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input name="Age" placeholder="Enter Age" onChange={handleChange} />
      <br />
      <br />
      <input name="Course" placeholder="Enter Course" onChange={handleChange} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input name="Batch" placeholder="Enter Batch" onChange={handleChange} />
      <br />
      <br />
      <button className="student" onClick={handleClick}>
        Add Student
      </button>
    </div>
  );
}

export default NewStudent;
