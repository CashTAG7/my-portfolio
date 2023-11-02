/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa6";
import Magnet from "../../../magnatic effect/Magnet";

const socialIcons = [
  { tag: <FaGithub size={32} />, href: "https://github.com/CashTAG7" },
  {
    tag: <FaFacebook size={32} />,
    href: "https://web.facebook.com/nomansland97",
  },
  {
    tag: <FaLinkedin size={32} />,
    href: "https://www.linkedin.com/in/cashtag7/",
  },
];

const Socials = () => {
  const buttonVariants = {
    rest: {
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      scale: 1.5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="grid grid-cols-3 gap-6 pt-24 px-24 place-items-center">
      {socialIcons.map((icon, index) => {
        return (
          <motion.div
            key={index}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="rest"
            initial="rest"
          >
            <Link
              href={icon.href}
              className="flex p-2 items-center text-dark-gray dark:text-lighter-gray"
              type="button"
              target="_blank"
            >
              <Magnet>{icon.tag}</Magnet>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Socials;
