import React from "react";
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { Signin } from "./Pages/Signin";
import { Signup } from "./Pages/Signup";

const UnauthenticatedApp : React.FC = () => {
  return (
    <div>
      <Router>
        <Approutes />
      </Router>
    </div>
  )
}

function Approutes (): JSX.Element  {
  return (
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    )
}

export default UnauthenticatedApp