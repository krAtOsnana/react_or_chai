import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/contactUs/ContactUs'
import User from './components/User/User'


// const CustomRouter = createBrowserRouter(
//   [
//     {
//       path:'/',
//       element:<Layout/>,
//       children:[
//         {
//           path:"",
//           element:<Home/>
//         },
//         {
//           path:"about",
//           element:<About/>
//         },
//         {
//           path:"ContactUs",
//           element:<ContactUs/>
//         }
//       ]
//     }
//   ]
// ) 

const CustomRouter=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='ContactUs' element={<ContactUs/>}/>
      <Route path='User/:userID' element={<User/>}/>
    </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={CustomRouter}/>
  </React.StrictMode>,
)
