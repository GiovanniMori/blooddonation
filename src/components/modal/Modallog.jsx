import {React, useState} from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import Signin from '../LogIn'
import {AiOutlineClose} from "react-icons/ai";
import { Link } from "react-router-dom";

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



const Modallog = () => {
    const [modalOpen, setModalOpen]= useState(true)
    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

  return (
    <div>
        {modalOpen && (
            <Backdrop onClick={() => (modalOpen ? close() : <Link to="/"></Link>)}>
            <div className="bg-white flex flex-col">
              <motion.div
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link to="/">
                    <AiOutlineClose className="h-7 w-7 left-[30px]" onClick={close}/>
                </Link>
                <Signin />
              </motion.div>
            </div>
          </Backdrop>
        )}
    </div>
  );
};

export default Modallog;
