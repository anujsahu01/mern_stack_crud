import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot from react-dom/client
// import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Select the root DOM element
const rootElement = document.getElementById('root');

// Create the root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  
  <React.StrictMode>
    
      <App />
  
  </React.StrictMode>
 
);
