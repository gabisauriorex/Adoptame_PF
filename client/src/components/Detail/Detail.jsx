 import React ,{ useEffect }from "react";
import { Link, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {getDetails}from '../../Redux/Actions/actions_pets' 

 import  '../Detail/Detail.css' 

export default function Detail(){
   const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(getDetails(id));   
    },[dispatch]);
   const detail = useSelector((state) => state.detail);
    return (
        <div className="container">
           <div className="detail_container">
                 <h4>{detail.name}</h4> 
                 <img className='imagen p' src ={detail.image} height="250px" width='250px' alt='not found'/>
                 <p className="title" >{detail.description}</p>
                 <p className="p"> <span className="text color">Color </span> <span className="text ">{detail.color}</span></p>
                 <p className="p"> <span className="text color">Altura </span> <span className="text ">{detail.height}</span></p>
                 <p className="p"> <span className="text color">Peso </span> <span className="text ">{detail.weight}</span></p>
                 <p className="p"> <span className="text color">Sexo </span> <span className="text ">{detail.sex}</span></p>
                 <p className="p"> <span className="text color">Encontrado el dia: </span> <span className="text ">{detail.timewait}</span></p>
                 <p className="p"> <span className="text color">Especie </span> <span className="text ">{detail.breed}</span></p>
                 <p className="p"> <span className="text color">Adoptado </span> <span className="text ">{detail.adopted}</span></p>
                 <p className="p"> <span className="text color">Identificado </span> <span className="text ">{detail.identified}</span></p>
                 <p className="p"> <span className="text color">Edad </span> <span className="text ">{detail.age}</span></p>
    
            </div> 

           <div className="contenedorBoton">
                 <Link  to={'/home'} >
               <button className="botonVolver">VOLVER</button>
               </Link>
            </div>  
                
         
        </div> 
             )}
            
        