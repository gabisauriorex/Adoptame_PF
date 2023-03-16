import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import React from "react";
import Adopta from "./components/Adopta/Adopta";
import Card from "./components/Card/Card";
import Dona from './components/Dona/Dona'
import  Dashboard  from './common/NavBar/Dashboard'
import About from "./pages/About/About";
import Footer from './components/Footer/Footer'
import Loading from "./components/Loading/Loading";
function AllRoutes() {
  return (
    <div>
         <Dashboard/> 
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
 
    {/*   <Footer/>   */}
     </div>
  );
}

export default AllRoutes;

