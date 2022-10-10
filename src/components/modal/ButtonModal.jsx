import {React, useState} from 'react'
import SignUp from '../SignUp'
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import {AiOutlineClose} from "react-icons/ai";
import Modallog from './Modallog';
import Modal from './Modal';


const ButtonModal = () => {
    const [modalOpen, setModalOpen]= useState(false)
    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)
  return (
    <div>
        <p >teste</p>
        
        {modalOpen && <Modallog modalOpen={modalOpen} handleClose={close} />}
    </div>
    
    
  )
}

export default ButtonModal