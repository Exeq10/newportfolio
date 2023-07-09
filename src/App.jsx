import { useState } from 'react'

import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  Router,
} from "react-router-dom";
import Layout from './components/Layout';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';





function App() {

  
const router = createBrowserRouter([


  {
    path:'/',
    element: <Layout/>,

    children:[


      {
        index:true,
        element : <About/>
      },



{
  path:'/portfolio',
  element: <Portfolio/> ,
 
},
{
  path:'/contact',
  element: <Contact/>

},
{
  path:'/skills',
  element:<Skills/>,

}

    ]
  }

  
])

 

  return (
    <>
    

    <RouterProvider router={router}/>



    </>
  )
}

export default App
