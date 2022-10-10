import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

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

const Modal = ({ handleClose }) => {
  return (
    <div>
      <Backdrop onClick={handleClose}>
        <div className="bg-white flex flex-col h-[50%] w-[50%]">
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h1 className="text-black text-bold text-3xl p-6">Teste</h1>
            <button className="bg-primary" onClick={handleClose}>
              close
            </button>
          </motion.div>
        </div>
      </Backdrop>
    </div>
  );
};

export default Modal;
