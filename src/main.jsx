import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SharedCart from './components/SharedCart/SharedCart.jsx'
import './index.css'
import {
  createBrowserRouter,RouterProvider
} from "react-router-dom";
import ItemCard from './components/item-card/ItemCard.jsx'
import Products from './components/Products/Products.jsx'




const router = createBrowserRouter([
  { path: "/",element: <App />,},
  { path: "/cart", element: <SharedCart/>},
  { path: "/cards", element: <ItemCard/>},
  { path: "/products", element: <Products/>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
