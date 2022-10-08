import React from 'react'
import {Link} from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className="bg-primary">
      <h3 className="text-white">Sobre o Projeto</h3>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default AboutUs
