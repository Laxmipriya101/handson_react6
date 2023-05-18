import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Student from "./Components/Student";
import store from "./Components/StoreComponent";
import EditStudent from "./Components/EditStudent";
import NewStudent from "./Components/NewStudent";

function App() {
  const [data, setData] = useState([
    { name: "John", Age: 24, Course: "MERN", Batch: "October" },
    { name: "Doe", Age: 25, Course: "MERN", Batch: "November" },
    { name: "Biden", Age: 26, Course: "MEAN", Batch: "October" },
    { name: "Barar", Age: 22, Course: "MEAN", Batch: "September" },
    { name: "Christ", Age: 23, Course: "MEAN", Batch: "October" },
    { name: "Elent", Age: 24, Course: "MEVN", Batch: "November" },
  ]);
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Student"
            element={
              <store.Provider value={{ entries: data, entriesFun: setData }}>
                <Student />
              </store.Provider>
            }
          />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/EditStudent"
            element={
              <store.Provider value={{ entries: data, entriesFun: setData }}>
                <EditStudent />
              </store.Provider>
            }
          />

          <Route
            path="/NewStudent"
            element={
              <store.Provider value={{ entries: data, entriesFun: setData }}>
                <NewStudent />
              </store.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
