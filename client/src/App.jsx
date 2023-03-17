
import axios from 'axios'
import './App.css'
import AllRoutes from './AllRoutes'

axios.defaults.baseURL="http://localhost:4000/";

function App() {
 return(

    <>
    <Navbar/>
   <AllRoutes/>
   {/*  <Navbar/> */}
   
    </>

 
 )
 
}

export default App
