import React from 'react';
import { createRoot } from 'react-dom/client';
import { CartProvider } from './components/store/CartContext';

import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
