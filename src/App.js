import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home1 from "./components/Home1";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { auth } from "../src/components/firebase";



import "./App.css";
import Home from "./components/Home/Home";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home1" element={<Home1/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;