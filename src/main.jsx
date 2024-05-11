import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import CreateAssignment from './components/createAssignment/CreateAssignment.jsx';
import PendingAssignment from './components/pendingAssignment/PendingAssignment.jsx';
import MyAssignment from './components/myAssignment/MyAssignment.jsx';
import Private from './components/Private/Private.jsx';
import Assignment from './components/Assignment/Assignment.jsx';
import ViewAssignment from './components/viewAssignment/ViewAssignment.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/assignment')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/assignments',
        element: <Assignment></Assignment>,
        loader: ()=> fetch('http://localhost:5000/assignment')
      },
      {
        path: '/view-assignment/:id',
        element: <ViewAssignment></ViewAssignment>,
        loader: ()=> fetch('http://localhost:5000/assignment')
      },
      {
        path: '/create-assignment',
        element: <Private>
          <CreateAssignment></CreateAssignment>
        </Private>
      },
      {
        path: '/pending-assignment',
        element: <PendingAssignment></PendingAssignment>
      },
      {
        path: '/my-assignment',
        element: <MyAssignment></MyAssignment>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <div className='lg:w-[1320px] md:w-full w-full mx-auto'>
 <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>,
    </div>
    
  
)
