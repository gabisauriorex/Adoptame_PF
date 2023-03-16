import React ,{useState,useEffect} from 'react'
import {useDispatch,useSelector}from 'react-redux'
import { getPets } from '../../Redux/Actions/actions_pets'
import Loading from '../Loading/Loading'


/* import {pets} from '../../Datos.js' */

//============MUI===============
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


//=================
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
//==================


function Pets() {


const dispatch=useDispatch();
const pets=useSelector(state=>state.pets)
   
console.log(pets)


 useEffect(()=>{
dispatch(getPets())
},[dispatch])

/* 
 if(!pets.length) {
  return <Loading/>;
}
 */




  return (
    <div>
          {

          pets?.map(p=>{
           // esta card es solo patra mostrar ya se va ir cuando mateo mande la card de el
            return (
              <Card sx={{ maxWidth: 345 , }}>
           {/*    <CardMedia
                sx={{ height: 140 }}
               
                 image="/static/images/cards/contemplative-reptile.jpg" 
                title="green iguana"
              /> */}

            <ImageList sx={{ width: 500, height: 450 ,ml:1 }}  rowHeight={164}>
               
             <ImageListItem key={p.imagen}>
              <img
              src={`${p.imagen}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${p.imagen}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt="mascota"
              loading="lazy"
              />
            </ImageListItem>

        </ImageList>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {p.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {p.descripcion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {p.color}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {p.edad}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {p.especie}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {p.sexo}
                </Typography>
              </CardContent>
              < CardActions>
              <Button size="small">ver mas </Button>
              </CardActions> 
            </Card>
            )

          })
        }

    </div>
  )
}

export default Pets


