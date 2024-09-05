import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,Route,Routes
} from "react-router-dom";
import Home from './screens/Home'
import AboutUs from './screens/Aboutus'
import ContactUs from './screens/Contactus'
import Faq from './screens/Aboutus'
import Blog from './screens/Blog'
import MainApp from './screens/MainApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
     
      <Route path='/' element={<MainApp/>} >
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/blog' element={<Blog/>} />
      </Route>

    </Routes>
   
  </Router>
  )
}

export default App
