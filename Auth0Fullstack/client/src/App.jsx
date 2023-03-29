import './App.css'
import axios from 'axios';


import { useAuth0 ,withAuthenticationRequired} from "@auth0/auth0-react"; //hook

// import {createAuth0Client} from '@auth0/auth0-spa-js';

// const CLIENT_ID="jypM45J5i7KtX2sBsMPBRnn5RKorvjKa"
// const DOMAIN="dev-ta62vlpo2ibk36hv.us.auth0.com"

// const auth0Client = await createAuth0Client({
//   domain: {DOMAIN},
//   client_id: {CLIENT_ID}
// });

// // Login with redirect
// await auth0Client.loginWithRedirect({
//   redirect_uri: 'http://127.0.0.1:5173/'
// });

// // Get token silently
// const token = await auth0Client.getTokenSilently();

// const response = await axios('https://my-api.com/data', {
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// });
// const data = await response.json();
// console.log(data);


//const { apiOrigin = "http://localhost:3000", VITE_AUDIENCE }=import.meta.env;

function App() {

  //esto es un hook de auth0
  const { isAuthenticated ,
       loginWithRedirect,
       loginWithPopup,
       user,
       logout,
     isLoading ,
       getAccessTokenSilently

  } = useAuth0();

            
  //const { user,isAuthenticated,loginWithRedirect,isLoading} = useAuth0()
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
 

//FUNCIONES AL BACK


 const Landing=async()=>{
   const response=await axios.get(`http://localhost:3000/`)
  const info=response.data;
   return  info;

 }
 const Home=async()=>{
  try {

      //creacion de token
    const token = await getAccessTokenSilently();

       console.log("token de front : \n", token)

    const response = await axios.get(`http://localhost:3000/home`, 
    //encabezado header con token
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const responseData = await response.data;

    console.log(response)
    return response.data;
   
  } catch (error) {
     console.log("mensaje de error", error.message)
  }

 }

  return (
    <div className="App">
      <h1>Auth + React</h1>
         
         <ul>
          <li><button onClick={() =>loginWithPopup()}>Login con Poput</button></li>
          <li><button onClick={() => loginWithRedirect()}>Login con redirect</button></li>
          <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> LogOut
           </button></li>
         </ul>

         <ul>
          <li>
            <button onClick={()=>Landing()}>LANDING</button>
          </li>
          <li>
            <button onClick={()=>Home()} /* disabled={!VITE_AUDIENCE} */>IR A RUTA PROTEGIDA HOME</button>
          </li>
         </ul>

 
  
             {/* Profile */}
 
         <h3>El usuario esta  {isAuthenticated ? 'Logueado' : 'No logueado' }</h3>
            {
              isAuthenticated &&(
             
                 <>
                {/* <h3>{user.nickname}</h3>
                <img src={user.picture} alt=''/>
                <h4>{user.email}</h4> */}
                <pre style={{backgroundColor:'black' , color:'yellowgreen'}}>
                    {JSON.stringify(user,null,2)}
                
                </pre>
                 </> 
              )
            }
    </div>
  )
}


/* export default withAuthenticationRequired(App, {
  onRedirecting: () => <div>Loading ...</div>
});
 */

export default App;




/* 
 {(isAuthenticated)
      ?(<><Profile/> <Logout/>
      </>
        ) 
          : (<Login/>)
       }
*/