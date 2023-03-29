import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";


// const {VITE_DOMAIN,VITE_CLIENT_ID,VITE_AUDIENCE}=import.meta.env;
// console.log(VITE_AUDIENCE, VITE_CLIENT_ID)
const CLIENT_ID="jypM45J5i7KtX2sBsMPBRnn5RKorvjKa"
const DOMAIN="dev-ta62vlpo2ibk36hv.us.auth0.com"

// 

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
      cacheLocation="localstorage"
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "Auth0Front",
        scope:'openId profile email'
    }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Auth0Provider>,
  );
  
