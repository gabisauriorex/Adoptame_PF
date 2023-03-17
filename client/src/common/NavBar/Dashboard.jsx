import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import{ Drawer} from '@mui/material';
 import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import {GroupAdd,Lock,Favorite,Home,Pets} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import {ListItemButton,ListItemIcon,ListItemText,Divider,IconButton,Button} from '@mui/material';


//=======================
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom'


 


const drawerWidth = 200;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    <AppBar position="fixed" sx={{backgroundColor:'#f06292' ,color:"Black"}} open={open} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
             
          >
          <MenuIcon/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            className={theme.typography}
          >
            Adoptame  
            <IconButton aria-label="icono"  color='inherit'>
             <Pets/>
          </IconButton>  
          </Typography>


         <Box sx={{flexGrow:1 }}>
         <SearchBar/> 
         </Box>

          
          <Box sx={{display:"flex" ,flexDirection:"row"  }}>
            
      {/*     <Button color="inherit" sx={{flexGrow:0}}>Adopta</Button>
          
          <Button color="inherit" sx={{flexGrow:0}}>Sobre Nosotros</Button> */}
          <Button color="inherit" sx={{flexGrow:0, fontFamily:['sans-serif','Arial']}}>Dona</Button>
          <Button color="inherit" sx={{flexGrow:0}}>Login</Button>
          <Button color="inherit" sx={{flexGrow:0}}>Registrarse</Button>
          </Box> 
        
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:"#607d8b",
            color:"white"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Adopta', 'Dona', 'Sobre Nosotros'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {text==="Adopta"?<Pets /> : text==="Dona"?<Favorite />:<Home/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[ 'Registro', 'Login'].map((text,index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 {index % 2 === 0 ? <GroupAdd/> : <Lock />} 


                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </Box>
  );
}