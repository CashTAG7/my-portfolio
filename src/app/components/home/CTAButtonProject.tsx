"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Magnet from "../magnatic effect/Magnet";

const CTAButtonProject = () => {
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
        animate="animate"
        whileHover="hover"
        whileTap="rest"
      >
        <Link
          href={"/project"}
          className="btn btn-neutral bg-dark-gray dark:bg-lighter-gray text-lighter-gray dark:text-dark-gray hover:bg-lighter-gray dark:hover:bg-dark-gray hover:text-dark-gray dark:hover:text-lighter-gray dark:hover:border-lighter-gray font-medium"
        >
          <span className="mx-auto text-lg">Explore Work &gt;&gt;</span>
        </Link>
      </motion.div>
    </Magnet>
  );
};

export default CTAButtonProject;
