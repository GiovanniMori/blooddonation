import React from 'react'
import ReactDOM from 'react-dom/client'

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import DataContainer from './components/DataContainer';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <DataContainer />
  </React.StrictMode>
)
