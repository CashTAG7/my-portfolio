"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Magnet from "../magnatic effect/Magnet";

const CTAButtonAbout = () => {
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
    <Magnet>
      <motion.div
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="rest"
      >
        <Link
          href={"/about"}
          className="btn btn-outline bg-lighter-gray dark:bg-dark-gray text-dark-gray dark:text-lighter-gray hover:bg-dark-gray hover:text-lighter-gray dark:hover:bg-light-gray dark:hover:text-dark-gray font-medium"
        >
          <span className="mx-auto text-lg">Meet the Developer &gt;&gt;</span>
        </Link>
      </motion.div>
    </Magnet>
  );
};

export default CTAButtonAbout;
