"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import useModeSwitcher from "../../hooks/useModeSwitcher";

const ModeSwitcher = () => {
  const [mode, setMode] = useModeSwitcher();

  const buttonVariants = {
    rest: {
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="rest"
      initial="rest"
      className="flex items-center rounded text-dark-gray dark:text-lighter-gray tooltip tooltip-bottom"
      data-tip={`${mode === "dark" ? "light mode" : "dark mode"}`}
      type="button"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
    </motion.button>
  );
};

export default ModeSwitcher;
