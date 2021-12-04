import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Register from "./Components/Register/Index";
import Home from "./Components/Home/Index";
import Signin from "./Components/Signin/Index";
import Footer from "./Components/Footer/Index";
import Reviews from "./Components/Reviews/Index";
import ReviewsForm from "./Components/ReviewsForm/Index";
import CVStudio from "./Components/CvStudio/Index";
import Contact from "./Components/CvStudio/Contact/Index";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cvtemplate" element={<CVStudio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
