/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiMessenger, SiTelegram } from "react-icons/si";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import Magnet from "../components/magnatic effect/Magnet";

const MediaLinks = () => {
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
    <div className="mx-8 mt-12 md:mt-4 flex md:flex-col md:w-1/3 items-center justify-evenly md:space-y-4">
      <p className="text-lg font-semibold text-dark-gray dark:text-lighter-gray">
        Media:
      </p>
      <Magnet>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="rest"
          initial="rest"
        >
          <Link
            className="md:h-10 md:w-40 md:justify-center p-2 items-center text-dark-gray dark:text-lighter-gray rounded md:bg-light-gray dark:md:bg-dark-gray hover:shadow-md md:hover:shadow-dark-gray dark:md:hover:shadow-light-gray md:flex md:space-x-1"
            href={"https://www.messenger.com/t/100010188529621"}
            target="_blank"
          >
            <SiMessenger size={"24"} />
            <p className="hidden md:block text-lg font-medium ">Messanger</p>
          </Link>
        </motion.div>
      </Magnet>
      <Magnet>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="rest"
          initial="rest"
        >
          <Link
            className="md:h-10 md:w-40 md:justify-center p-2 items-center text-dark-gray dark:text-lighter-gray rounded md:bg-light-gray dark:md:bg-dark-gray hover:shadow-md md:hover:shadow-dark-gray dark:md:hover:shadow-light-gray md:flex md:space-x-1"
            href={"https://wa.me/+8801980737644"}
          >
            <RiWhatsappFill size={"24"} />
            <p className="hidden md:block text-lg font-medium">Whatsapp</p>
          </Link>
        </motion.div>
      </Magnet>
      <Magnet>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="rest"
          initial="rest"
        >
          <Link
            className="md:h-10 md:w-40 md:justify-center p-2 items-center rounded text-dark-gray dark:text-lighter-gray md:bg-light-gray dark:md:bg-dark-gray hover:shadow-md  md:hover:shadow-dark-gray dark:md:hover:shadow-light-gray md:flex md:space-x-1"
            href={
              "mailto:nomanebeny@gmail.com.com?subject=Your%20Subject&body=Your%20Message"
            }
            target="_blank"
          >
            <IoMail size={"24"} />
            <p className="hidden md:block text-lg font-medium">Mail</p>
          </Link>
        </motion.div>
      </Magnet>

      <Magnet>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="rest"
          initial="rest"
        >
          <Link
            className="md:h-10 md:w-40 md:justify-center p-2 items-center rounded text-dark-gray dark:text-lighter-gray md:bg-light-gray dark:md:bg-dark-gray hover:shadow-md md:hover:shadow-dark-gray dark:md:hover:shadow-light-gray md:flex md:space-x-1"
            href={"https://t.me/CASHTag7"}
            target="_blank"
          >
            <SiTelegram size={"24"} />
            <p className="hidden md:block text-lg font-medium">Telegram</p>
          </Link>
        </motion.div>
      </Magnet>

      <Magnet>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="rest"
          initial="rest"
        >
          <Link
            className="md:h-10 md:w-40 md:justify-center p-2 items-center rounded text-dark-gray dark:text-lighter-gray md:bg-light-gray dark:md:bg-dark-gray hover:shadow-md md:hover:shadow-dark-gray dark:md:hover:shadow-light-gray md:flex md:space-x-1"
            href={"https://www.instagram.com/direct/inbox/?hl=en"}
            target="_blank"
          >
            <RiInstagramFill size={"24"} />
            <p className="hidden md:block text-lg font-medium">Instagram</p>
          </Link>
        </motion.div>
      </Magnet>
    </div>
  );
};

export default MediaLinks;
