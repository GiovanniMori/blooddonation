import {React, useState} from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import {AiOutlineClose} from "react-icons/ai";
import { Link } from "react-router-dom";
import SignUp from '../SignUp'

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1.2,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};



const ModalReg = () => {
    const [modalOpen, setModalOpen]= useState(true)
    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)
    

  return (
    <div>
        {modalOpen && (
            <Backdrop onClick={() => (modalOpen ? close() : open())}>
            <div className="flex flex-col">
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="rounded-xl bg-primary pl-10 pr-4 pt-5 pb-6 border-black border-4"
                variants={dropIn}
                initial="hidden"
                animate="visible" 
                exit="exit"
              >
                <Link to="/">
                    <AiOutlineClose className="h-7 w-7 float-right" onClick={close}/>
                </Link>
                <SignUp />
              </motion.div>
            </div>
          </Backdrop>
        )}
    </div>
  );
};

export default ModalReg;
