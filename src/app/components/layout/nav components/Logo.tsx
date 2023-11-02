import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import LogoIcon from "../../icons/LogoIcon";

const Logo = () => {
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
    <motion.div
      variants={buttonVariants}
      whileHover="hover"
      whileTap="rest"
      initial="rest"
      className=""
    >
      <Link
        className="text-dark-gray dark:text-lighter-gray font-extrabold text-2xl"
        href={"/"}
      >
        <LogoIcon />
      </Link>
    </motion.div>
  );
};

export default Logo;
