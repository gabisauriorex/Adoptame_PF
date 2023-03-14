import Home from "./Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import React from "react";
import Adopta from "./components/Adopta/Adopta";
import Card from "./components/Card/Card";
import Dona from './components/Dona/Dona'
import  NavBar  from './components/Navbar/Navbar'
import About from "./Views/About/About";

function AllRoutes() {
  return (
    <div>
      <NavBar/> 
       <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<Landing/>} /> 
          <Route exact path="/Adopta" element={<Adopta/>} />
          <Route exact path="/Pet/:id" element={<Card/>} />
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/Dona" element={<Dona/>} />
         <Route exact path="/About" element={<About/>} />
        </Routes>
       </BrowserRouter>

       
     </div>
  );
}

export default AllRoutes;

