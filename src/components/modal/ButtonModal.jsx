import {React, useState} from 'react'
import Modal from "./Modal"

const ButtonModal = () => {
    const [modalOpen, setModalOpen]= useState(false)
    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)
  return (
    <div>
        <button className="bg-tertiary w-[100px] h-16"onClick={() => (modalOpen ? close(): open())} >teste</button>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
    </div>

    
  )
}

export default ButtonModal