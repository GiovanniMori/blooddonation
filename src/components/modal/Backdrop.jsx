import React from "react";
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <div>
      <motion.div
        className="fixed left-[0px] top-[0px] w-full h-full bg-black bg-opacity-80 flex items-center justify-center"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Backdrop;
