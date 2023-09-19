import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import LoginLayout from './LoginLayout/LoginLayout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Provider/authProvider';
import Category from './Pages/Category';
import PlaceLayout from './Layout/PlaceLayout';
import Place from './Pages/Place';
import AboutLayout from './Layout/AboutLayout';
import BlogLayout from './Layout/BlogLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element: <Navigate to='/categories/0'></Navigate>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
  {
    path: "/categories",
    element: <Main></Main>,
    children:[
      {
        path:':id',
        element:<Category></Category>,
        loader: ({params})=>fetch(`http://localhost:3000/categories/${params.id}`)
      }
    ]
  },
  {
    path:'/place',
    element:<PlaceLayout></PlaceLayout>,
    children:[
      {
        path:':id',
        element: <Place></Place>,
        loader:({params})=>fetch(`http://localhost:3000/place/${params.id}`)
      }
    ]
  },
  {
    path:'/about',
    element: <AboutLayout></AboutLayout>
  },
  {
    path:'/blog',
    element:<BlogLayout></BlogLayout>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
