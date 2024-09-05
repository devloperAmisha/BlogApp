import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import DefaultLayout from './Layouts/DefaultLayout';
import Register from './Pages/Register';
import CreateBlog from './Pages/CreateBlog';


const router = createBrowserRouter([
  {
    element: <DefaultLayout/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog/create",
        element: <CreateBlog />,
      },
      
    ]
  },
  
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App