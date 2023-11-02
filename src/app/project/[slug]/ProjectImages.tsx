import React from "react";
import Image from "next/image";
import home from "../assets/projectAssets/home.png";
import homeDark from "../assets/projectAssets/home-dark.png";
import menu from "../assets/projectAssets/menu.png";
import menuDark from "../assets/projectAssets/menu-dark.png";
import project from "../assets/projectAssets/projects.png";
import projectDark from "../assets/projectAssets/projects-dark.png";
import about from "../assets/projectAssets/about.png";
import about2 from "../assets/projectAssets/about2.png";
import aboutDark from "../assets/projectAssets/about-dark.png";
import about2Dark from "../assets/projectAssets/about2-dark.png";
import contact from "../assets/projectAssets/contact.png";
import contactDark from "../assets/projectAssets/contact-dark.png";
import mobile from "../assets/projectAssets/mobile.png";

const lightMode = [home, menu, project, about, about2, contact];
const darkMode = [
  homeDark,
  menuDark,
  projectDark,
  aboutDark,
  about2Dark,
  contactDark,
];

const ProjectImages = () => {
  return (
    <div className="py-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24">
      <p className="text-2xl text-dark-gray dark:text-lighter-gray font-extrabold mb-4 tracking-widest">
        LIGHTMODE:
      </p>
      {lightMode.map((image, index) => {
        return (
          <Image
            key={index}
            className="mx-auto mt-4 mb-2 border-4 border-dark-gray dark:border-lighter-gray"
            src={image}
            alt={`Light Mode View ${index}`}
            height={1500}
            width={1500}
          />
        );
      })}
      <p className="pt-8 text-2xl text-dark-gray dark:text-lighter-gray font-extrabold mb-4 tracking-widest">
        DARKMODE:
      </p>
      {darkMode.map((image, index) => {
        return (
          <Image
            key={index}
            className="mx-auto mt-4 mb-2 border-4 border-dark-gray dark:border-lighter-gray"
            src={image}
            alt={`Dark View ${index}`}
            height={1500}
            width={1500}
          />
        );
      })}
      <p className="pt-8 text-2xl text-dark-gray dark:text-lighter-gray font-extrabold mb-4 tracking-widest">
        MOBILE:
      </p>
      <Image
        className="mx-auto mt-4 mb-2 border-4 border-dark-gray dark:border-lighter-gray"
        src={mobile}
        alt="Mobile Views"
        height={1500}
        width={1500}
      />
    </div>
  );
};

export default ProjectImages;
