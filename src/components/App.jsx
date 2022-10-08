import React from 'react'

import {Routes , Route} from "react-router-dom"
import Home from "./Home"
import Form from "./Form"

const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
        </Routes>

    </div>
  )
}

export default App
