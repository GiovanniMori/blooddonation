import React from 'react'
import { Router } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login/Login';
import AboutUs from './AboutUs';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
