import { React, useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import LogIn from "../auth/LogIn";
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

function Modallog(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      <button onClick={open}>{props.title}</button>
      {modalOpen && (
        <Backdrop onClick={() => (modalOpen ? close() : open())}>
          <div className="flex flex-col ">
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="rounded-xl bg-red-500 p-6 border-black border-4"
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              grab
            >
              <div className="flex justify-end w-[395px]   ml-3">
                <AiOutlineClose
                  className="h-7 w-7 hover:cursor-pointer "
                  onClick={close}
                />
              </div>

              <LogIn isRegister={props.isRegister} />
            </motion.div>
          </div>
        </Backdrop>
      )}
    </div>
  );
}

export default Modallog;
