import React from 'react'
import ReactDOM from 'react-dom/client'

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutDonate from './components/AboutDonate';
import Form from './components/Form';
import Requirements from './components/Requirements';
import SignIn from './SignIn';
import Auth from './Auth'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />

    <AboutDonate />
    <Requirements />
    <Form />
  </React.StrictMode>
)
