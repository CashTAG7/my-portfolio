"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Magnet from "../components/magnatic effect/Magnet";

const buttonVariants = {
  rest: {
    x: 0,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    x: 0,
    scale: 1.2,
    transition: {
      duration: 0.2,
    },
  },
};

const ResumeButton = () => {
  return (
    <motion.div
      className="max-w-fit"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="rest"
      initial="rest"
    >
      <Magnet>
        <Link
          href={
            "https://drive.google.com/file/d/16ofQgwxPMWuY5CV_7Y8D3WMyjb-rkc5X/view?usp=drive_link"
          }
          download={"Resume.pdf"}
          className="btn btn-neutral mx-4 sm:mx-8 md:mx-0 lg:mx-16 xl:mx-20 2xl:mx-24 mb-8 md:my-8 bg-dark-gray dark:bg-lighter-gray text-lighter-gray dark:text-dark-gray hover:bg-lighter-gray dark:hover:bg-dark-gray hover:text-dark-gray font-medium dark:hover:text-lighter-gray dark:hover:border-lighter-gray"
          target="_blank"
        >
          <span className="mx-auto text-lg flex items-center">
            RESUME <MdOutlineKeyboardDoubleArrowDown />
          </span>
        </Link>
      </Magnet>
    </motion.div>
  );
};

export default ResumeButton;
