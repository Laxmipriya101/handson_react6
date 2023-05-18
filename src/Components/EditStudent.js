import React, { useContext } from "react";
import store from "./StoreComponent";
import { useLocation, useNavigate } from "react-router-dom";

function EditStudent() {
  const ContextData = useContext(store);
  const Navi = useNavigate();
  const index = useLocation().state.data;

  const UpdateObj = {
    name: ContextData.entries[index].name,
    Age: ContextData.entries[index].Age,
    Course: ContextData.entries[index].Course,
    Batch: ContextData.entries[index].Batch,
  };

  const HandleChange = (e) => {
    UpdateObj[e.target.name] = e.target.value;
  };

  const handleUpdate = () => {
    ContextData.entries[index] = UpdateObj;
    Navi(-1);
  };
  return (
    <div className="text">
      <h1>Update the Data</h1>
      <input
        type="text"
        name="name"
        placeholder={ContextData.entries[index].name}
        onChange={HandleChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="text"
        name="Age"
        placeholder={ContextData.entries[index].Age}
        onChange={HandleChange}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        name="Course"
        placeholder={ContextData.entries[index].Course}
        onChange={HandleChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="text"
        name="Batch"
        placeholder={ContextData.entries[index].Batch}
        onChange={HandleChange}
      />{" "}
      <br />
      <br />
      <button onClick={handleUpdate} className="update">
        Update
      </button>
    </div>
  );
}

export default EditStudent;
