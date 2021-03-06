import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Annonces from "./pages/annonces/annonces";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Recruters from "./pages/recruters/Recruters";
import Register from "./pages/Register";
import Condidats from "./pages/condidats/Condidats";
import AddCondidat from "./pages/condidats/addCondidat";
import AddRecruter from "./pages/recruters/AddRecruter";
import React from "react";

function App() {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css'
        integrity='sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4'
        crossorigin='anonymous'></link>{" "}
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />{" "}
          <Route path='/register' element={<Register />} />{" "}
          <Route path='/' element={<Dashboard />}>
            <Route path='recruters' element={<Recruters />} />{" "}
            <Route path='annonces' element={<Annonces />} />{" "}
            <Route path='condidats' element={<Condidats />} />{" "}
            <Route path='addCondidat' element={<AddCondidat />} />{" "}
            <Route path='addRecruter' element={<AddRecruter />} />{" "}
          </Route>{" "}
        </Routes>{" "}
      </Router>{" "}
      <ToastContainer />
    </>
  );
}

export default App;
