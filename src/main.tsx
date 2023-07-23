import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home/Home.tsx'
import Login from './pages/login/Login.tsx'
import Dashboard from './pages/dashboard/Dashboard.tsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'login',
    element:<Login></Login>
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
