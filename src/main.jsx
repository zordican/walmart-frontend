import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,RouterProvider
} from "react-router-dom";
import SharedCart from './components/sharedCart/SharedCart';



const router = createBrowserRouter([
  { path: "/",element: <App />,},
  { path: "/cart", element: <SharedCart/>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
