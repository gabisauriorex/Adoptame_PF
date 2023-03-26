import './App.css'
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react"; //hook
function App() {

  //esto es un hook de auth0
  const { isAuthenticated ,
       loginWithRedirect,
       loginWithPopup,
       user,
       logout,
       isLoading ,getAccessTokenSilently
  } = useAuth0();

            
  
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }


//FUNCIONES AL BACK


 const Landing=async()=>{
   const response=await axios.get("http://localhost:3000/")
  const info=response.data;
   return  info;

 }
 const Home=async()=>{
  try {
    const token= await getAccessTokenSilently();
   //console.log(token)
  const response=await axios.get("http://localhost:3000/home",
  {
   headers:{
    Authorization:`Bearer ${token}`,
     algorithms: ["RS256"],
   },
   })

   console.log(response.data)
  // const info=response.data;
  // return  info;  
  } catch (error) {
     console.log(error.message)
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
            <button onClick={()=>Home()}>HOMEO O CARDS</button>
          </li>
         </ul>

 
  
             {/* Profile */}
 
         <h3>El usuario esta  {isAuthenticated ? 'Logueado' : 'No logueado' }</h3>
            {
              isAuthenticated &&(
                <pre>

                  {JSON.stringify(user,null,2)}
                </pre>

              )
            }
    </div>
  )
}

export default App



/* 
 {(isAuthenticated)
      ?(<><Profile/> <Logout/>
      </>
        ) 
          : (<Login/>)
       }
*/