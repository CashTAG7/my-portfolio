/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import ModeSwitcher from "./nav components/ModeSwitcher";
import Logo from "./nav components/Logo";
import SlidingNav from "./nav components/SlidingNav";

const Navbar = () => {
  const navariant = {
    open: {
      scale: [1, 2, 1],
      rotate: [0, -360, 0],
      transition: {
        duration: 0.8,
      },
    },
    closed: {
      scale: [1, 2, 1],
      rotate: [0, 360, 0],
      transition: {
        duration: 0.8,
      },
    },
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="bg-light-gray dark:bg-dark-gray text-dark-gray dark:text-lighter-gray  fixed top-0 left-0 right-0">
        <div className="flex justify-between py-2 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 items-center justify-items-center border-b-4 border-dark-gray dark:border-light-gray">
          <Logo />

          <div className="flex space-x-5 sm:space-x-7 md:space-x-9 lg:space-x-11 xl:space-x-13">
            {/* <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="rest"
              initial="rest"
              className="flex items-center rounded text-dark-gray dark:text-lighter-gray"
              type="button"
            >
              <FaLanguage size={32} />
            </motion.button> */}
            <ModeSwitcher />

            <motion.button
              animate={isNavOpen ? "open" : "closed"}
              variants={navariant}
              whileTap={{
                scale: 1,
                transition: {
                  duration: 0.2,
                },
              }}
              whileHover={{
                scale: 1.2,
                transition: {
                  duration: 0.2,
                },
              }}
              type="button"
              onClick={() => {
                setIsNavOpen(!isNavOpen);
              }}
              className="flex items-center rounded text-dark-gray dark:text-lighter-gray"
            >
              {!isNavOpen && <RiMenuUnfoldFill size={26} />}
              {isNavOpen && <RiMenuFoldFill size={26} />}
            </motion.button>
          </div>
        </div>

        <SlidingNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
