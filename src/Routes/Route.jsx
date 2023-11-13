import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Works from "../Pages/Works/Works";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/Home/Shared/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/works',
                element: <Works></Works>,
                loader: ()=> fetch('https://portfolio-server-side-sand.vercel.app/allProjects')
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
  ])

  export default router;