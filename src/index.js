import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react';

// constants available in process.env are stored in .env in root directory
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(window.root);
root.render(
  <React.StrictMode>
    <Auth0Provider
      // data used by auth0 components
      domain={domain}
      clientId={clientId}
      // redirectUri should be one of urls specified in the list
      // of callback urls in app settings on auth0's website
      redirectUri={window.location.origin + '/penis'}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
