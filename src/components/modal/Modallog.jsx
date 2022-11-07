import { React, useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import Signin from '../LogIn'
import { AiOutlineClose } from "react-icons/ai";

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
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)


  return (
    <div>
      {modalOpen ? (
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
              <AiOutlineClose className="h-7 w-7 float-right" onClick={close} />
              <Signin />
            </motion.div>
          </div>
        </Backdrop>
      ) : (<div>Entrar</div>)}
    </div>
  );
};

export default Modallog;
