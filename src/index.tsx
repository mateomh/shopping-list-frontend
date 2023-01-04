import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartContext from './utils/contexts/CartContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartContext>
      <App />
    </CartContext>
  </React.StrictMode>
);
