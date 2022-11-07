import {React, useState} from "react";
import { motion } from "framer-motion";
import Backdrop from "../../modal/Backdrop";
import {AiOutlineClose} from "react-icons/ai";
import { Link, redirect } from "react-router-dom";
import { GetNordeste } from "../database/nordeste";


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



const NordesteModal = () => {
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
                className="rounded-xl bg-white pl-10 pr-4 pt-10 w-2/4 mx-auto border-black border-4"
                variants={dropIn}
                initial="hidden"
                animate="visible" 
                exit="exit"
              >
                <Link to="/">
                    <AiOutlineClose className="h-7 w-7 float-right" onClick={close}/>
                </Link>
                <h1 className=" text-primary text-3xl font-bold py-3 px-3 inline-block mx-auto text-center">Esses são os hemocentros da sua região</h1>
                <div className="mx-auto py-16">{<GetNordeste />}</div>
              </motion.div>
            </div>
          </Backdrop>
        )}
    </div>
  );
};

export default NordesteModal;
