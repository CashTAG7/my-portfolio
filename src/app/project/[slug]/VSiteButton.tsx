"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Magnet from "../../components/magnatic effect/Magnet";

const VSiteButton = () => {
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
          className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 mb-8 btn btn-neutral bg-dark-gray dark:bg-lighter-gray text-lighter-gray dark:text-dark-gray hover:bg-lighter-gray dark:hover:bg-dark-gray hover:text-dark-gray font-medium dark:hover:text-lighter-gray dark:hover:border-lighter-gray"
          href={"#"}
        >
          <span className="mx-auto text-lg">View Site &gt;&gt;</span>
        </Link>
      </Magnet>
    </motion.div>
  );
};

export default VSiteButton;
