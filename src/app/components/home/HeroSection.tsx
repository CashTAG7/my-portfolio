import Link from "next/link";

import CTAButtonProject from "./CTAButtonProject";
import CTAButtonAbout from "./CTAButtonAbout";

const HeroSection = () => {
  return (
    <div className="bg-pure-white dark:bg-darker-gray max-h-screen flex-col text-center text-dark-gray pt-32 mb-8 md:mb-12">
      <div className="text-4xl text-dark-gray dark:text-lighter-gray tracking-widest font-semibold mb-8">
        <span className="">Building the Web,</span> <br /> One Line at a Time
      </div>
      <div className="text-3xl text-dark-gray dark:text-lighter-gray mb-4 md:mb-6">
        Web Developer | Digital Explorer
      </div>
      <p className="mx-5 md:mx-24 lg:mx-32 xl:mx-40 text-xl dark:text-lighter-gray">
        Hey there! I am{"  "}{" "}
        <Link
          href={"/about"}
          className="text-darker-gray dark:text-lighter-gray font-semibold hover:bg-dark-gray dark:hover:bg-lighter-gray hover:text-lighter-gray dark:hover:text-dark-gray"
        >
          Noman Ebeny Shahid
        </Link>
        , a web wizard and React.js fanatic. I build awesome stuff on the web,
        and this is my digital playground. Check out some of my coolest{" "}
        <Link
          href={"/project"}
          className="text-darker-gray dark:text-lighter-gray font-semibold hover:bg-dark-gray dark:hover:bg-lighter-gray hover:text-lighter-gray dark:hover:text-dark-gray"
        >
          projects!
        </Link>
      </p>
      <div className="md:flex md:justify-center items-center">
        <div className="mt-8 md:mt-12 md:mr-4">
          <CTAButtonProject />
        </div>

        <div className="mt-4 md:mt-12 md:ml-4">
          <CTAButtonAbout />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
