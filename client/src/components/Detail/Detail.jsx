 import React ,{ useEffect }from "react";
import { Link, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

 import {getDetails}from '../../Redux/Actions/actions_pets' 

/* import  '../Detail/Detail.css' */

export default function Detail(){
 /*    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetails(id));   
    },[id, dispatch]); */

   // const detail = useSelector((state) => state.detail);
    return (
        <div className="container">
        
                  <div className="detail_container">
                <h4 className="title" >picha</h4>
                <p className="">codigo: 1</p> 
                <img className='imagen p' src ="https://www.hogarmania.com/archivos/202101/galgo-tipos-portada-668x400x80xX-1.jpg" height="240px" width='470px' alt='not found'/>
                 <p className="p"> <span className="text color">Color </span> <span className="text ">blanco</span></p>
    
            </div> 

            <div className="contenedorBoton">
                 <Link  to={'/home'} >
               <button className="botonVolver">VOLVER</button>
               </Link>
            </div>  
                 
         
        </div> 
             )
            }
            
        