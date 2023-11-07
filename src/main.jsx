import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#1F1F1F] w-full h-full'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
