import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import { Route, Routes ,useLocation} from "react-router-dom";
import React from "react";
import Adopta from "./components/Adopta/Adopta";
import Detail from "./components/Detail/Detail";
import Dona from './components/Dona/Dona'
import  Dashboard  from './common/NavBar/Dashboard'
import About from "./pages/About/About";
import Footer from './components/Footer/Footer'
import Loading from "./components/Loading/Loading";
import CreatePet from "./components/CreatePet/CreatePet";
function AllRoutes() {
  //const location = useLocation();

  return (
    <div>
         <Dashboard/> 
       <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<Landing/>} /> 
          <Route exact path="/Adopta" element={<Adopta/>} />
          <Route exact path="/Pet/:id" element={<Detail/>} />
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/Dona" element={<Dona/>} />
         <Route exact path="/About" element={<About/>} />
         <Route exact path="/createMascota" element={<CreatePet/>} />
        </Routes>
      </BrowserRouter>
 
    {/*   <Footer/>   */}
     </div>
  );
}

export default AllRoutes;

