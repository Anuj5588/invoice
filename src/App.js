import React, { useState } from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import InvoiceForm from './components/InvoiceForm';
import SignIn from "./SignIn";




function App() {
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl">


        
      
        
        
          <InvoiceForm/> 
        
        
  
      

      </div>
    </div>
  );
}

export default App;
