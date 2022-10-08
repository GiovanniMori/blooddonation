import React from 'react'

import {Routes , Route} from "react-router-dom"
import Home from "./Home"
import ModalPage from "../components/modal/ModalPage"

const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modal" element={<ModalPage />} />
        </Routes>

    </div>
  )
}

export default App
