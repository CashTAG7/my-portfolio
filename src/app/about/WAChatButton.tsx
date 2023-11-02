"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Magnet from "../components/magnatic effect/Magnet";

const WAChatButton = () => {
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
    <motion.div
      className="max-w-fit"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="rest"
      initial="rest"
    >
      <Magnet>
        <Link
          href={"/contact"}
          className="btn btn-neutral mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 mb-8 bg-dark-gray text-lighter-gray hover:bg-lighter-gray hover:text-dark-gray font-medium dark:bg-lighter-gray
          dark:text-dark-gray
          dark:hover:bg-dark-gray
          dark:hover:text-lighter-gray dark:hover:border-lighter-gray"
        >
          <span className="mx-auto text-lg">Reach Me Here</span>
        </Link>
      </Magnet>
    </motion.div>
  );
};

export default WAChatButton;
