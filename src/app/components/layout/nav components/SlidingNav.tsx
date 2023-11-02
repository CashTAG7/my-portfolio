/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect, useRef } from "react";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Magnet from "../../magnatic effect/Magnet";
import Socials from "./sliding nav components/Socials";
import Footer from "./sliding nav components/Footer";

interface ChildProps {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlidingNav = ({ isNavOpen, setIsNavOpen }: ChildProps) => {
  const pages = [
    { title: "Home", href: "/" },
    { title: "Project", href: "/project" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  const menuSlide = {
    initial: {
      x: "-100%",
    },
    enter: {
      x: "0%",
      transition: { duration: 0.8, ease: [0.68, -0.6, 0.32, 1.6] },
    },
    exit: {
      x: "-100%",
      transition: { duration: 0.8, ease: [0.68, -0.6, 0.32, 1.6] },
    },
  };

  const linkSlide = {
    initial: {
      x: "80px",
    },
    enter: (i: number) => ({
      x: "0px",
      transition: {
        duration: 1,
        ease: [0.68, -0.6, 0.32, 1.6],
        delay: 0.15 * i,
      },
    }),
    exit: (i: number) => ({
      x: "80px",
      transition: {
        duration: 1,
        ease: [0.68, -0.6, 0.32, 1.6],
        delay: 0.15 * i,
      },
    }),
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2,
      },
    },
    rest: {
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        navRef.current &&
        e.target instanceof Node &&
        !navRef.current.contains(e.target as Node)
      ) {
        setIsNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setIsNavOpen]);

  return (
    <AnimatePresence>
      {isNavOpen && (
        <motion.div
          variants={menuSlide}
          initial="initial"
          animate="enter"
          exit="exit"
          ref={navRef}
          className="w-full md:w-1/2 lg:w-1/3  min-h-screen absolute top-13 left-0 right-0 bg-light-gray dark:bg-dark-gray z-50 md:rounded-r-xl md:border-r-4 md:border-dark-gray dark:md:border-light-gray"
        >
          <div className="pt-16">
            <div>
              {pages.map(
                (menu: { title: string; href: string }, index: number) => {
                  return (
                    <Magnet>
                      <motion.div
                        custom={index}
                        variants={linkSlide}
                        initial="initial"
                        animate="enter"
                        whileHover="hover"
                        whileTap="rest"
                        exit="exit"
                        key={index}
                      >
                        <Link
                          onClick={() => setIsNavOpen(false)}
                          href={menu.href}
                          className="block mt-10 text-5xl font-semibold tracking-wide text-center text-dark-gray dark:text-lighter-gray"
                        >
                          {menu.title}
                        </Link>
                      </motion.div>
                    </Magnet>
                  );
                }
              )}
            </div>
            <Socials />
          </div>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlidingNav;
