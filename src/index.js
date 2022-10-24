import React from 'react';
import ReactDOM from 'react-dom/client';
import AllConnect from './AllConnect';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './Context/CartContextProvider';
import AuthContextProvider from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<AuthContextProvider>
  
<CartContextProvider>
      <BrowserRouter>
        <AllConnect />
      </BrowserRouter>
    </CartContextProvider>
</AuthContextProvider>
 
);


