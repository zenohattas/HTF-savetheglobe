import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
  domain="dev-iv2wvcfy528etoco.us.auth0.com"
  clientId="4aNIUPyNnu2VZWJl9up0Z4JTHj4mMxOH"
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>
);

// ReactDOM.render(
//   <Auth0Provider
//   domain="dev-iv2wvcfy528etoco.us.auth0.com"
//   clientId="4aNIUPyNnu2VZWJl9up0Z4JTHj4mMxOH"
//   redirectUri={window.location.origin}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
