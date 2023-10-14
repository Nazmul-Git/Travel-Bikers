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
import BookingLayout from './Layout/BookingLayout';
import Booking from './Pages/Booking';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import BookedLayout from './Layout/BookedLayout';


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
      },
      
    ]
  },
  {
    path:'/booking',
    element:<BookingLayout></BookingLayout>,
    children:[
      {
        path:':id',
        element: <PrivateRoute><Booking></Booking></PrivateRoute>,
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
  },
  {
    path:'/bookings',
    element:<BookedLayout></BookedLayout>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
