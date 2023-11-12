import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthContext from './AuthContext/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <HelmetProvider>
        <div className='bg-[#040C18] h-[100vh] max-w-screen-2xl mx-auto'>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </HelmetProvider>
    </AuthContext>
  </React.StrictMode>,
)
