"use client";
import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-darker-gray">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-24 h-24 bg-lighter-gray dark:bg-darker-gray  rounded-full flex justify-center items-center">
          <motion.div
            className="w-10 h-10 bg-opacity-10 bg-darker-gray dark:bg-lighter-gray rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
