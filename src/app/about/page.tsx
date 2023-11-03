import ResumeButton from "./ResumeButton";
import WAChatButton from "./WAChatButton";
import OwnerImage from "./OwnerImage";

export default function About() {
  return (
    <>
      <title>About</title>
      <div className="pt-12 min-h-screen ">
        <p className="mt-44 text-center text-4xl text-dark-gray dark:text-lighter-gray font-semibold mb-4 tracking-widest">
          About Me
        </p>
        <hr className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 border-2 mb-8 border-dark-gray dark:border-light-gray" />
        <div className="md:flex">
          <OwnerImage />
          <div className="lg:my-auto md:w-2/3">
            <p className="mx-4 sm:mx-8 md:mx-0 lg:mx-16 xl:mx-20 2xl:mx-24 my-8 md:my-0 text-lg text-darker-gray dark:text-lighter-gray">
              Hey there, I&#39;m Md. Noman Ebeny Shahid, and I&#39;m delighted
              to welcome you to my digital space. <br /> <br />
              <span className="font-semibold text-xl">Who Am I?</span> <br />
              I&#39;m a passionate web developer, constantly driven by the
              ever-evolving world of technology. My journey in the realm of web
              development began as a simple curiosity and has grown into an
              adventurous passion that fuels my creativity and innovation.{" "}
              <br />
              <br />
              <span className="font-semibold text-xl">Why I Code?</span> <br />I
              believe the internet is the canvas of the future, and web
              development is my way of painting on it. The power to craft
              digital experiences that connect and inspire is what drives me
              every day. <br />
              <br />
              <span className="font-semibold text-xl">My Expertise</span> <br />
              I specialize in full-stack web development, weaving front-end
              magic and creating robust back-end solutions. I transform concepts
              into digital marvels and love every moment of the web development
              journey. <br />
              <br />
              <span className="font-semibold text-xl">
                The Journey Ahead
              </span>{" "}
              <br />
              This space isn&#39;t just a showcase; it&#39;s where I share my
              insights, my creative process, and my experiences in the web
              development world. My mission is to inspire, educate, and connect
              with fellow enthusiasts, clients, and collaborators.
            </p>
            <ResumeButton />
          </div>
        </div>

        <div className="md:flex mx-4 sm:mx-8 md:mx-0">
          <div className="md:ml-12 lg:ml-16 xl:ml-20 2xl:ml-24 rounded-t-xl md:rounded-l-xl md:rounded-r-none h-40 md:h-96 md:w-1/2 border-2 mb-0 border-dark-gray dark:border-light-gray flex justify-center items-center">
            <p className="text-4xl text-dark-gray dark:text-lighter-gray font-bold text-center">
              SKILLS & <br />
              SERVICES
            </p>
          </div>
          <div className=" md:mr-12 lg:mr-16 xl:mr-20 2xl:mr-24 rounded-b-xl md:rounded-r-xl md:rounded-l-none h-80 md:h-96 md:w-1/2 border-b-2 border-x-2 mb-8 border-dark-gray dark:border-light-gray bg-dark-gray dark:bg-light-gray flex items-center justify-center">
            <p className="text-light-gray dark:text-dark-gray font-bold text-center px-1  md:py-0">
              <span className="text-xl">WEBSITE REDEVELOPMENT,</span>
              <br />
              <span className="text-sm">
                ADVANCED WEB FEATURES, CSS, FIGMA, MAINTENANCE, OPTIMIZATION,
                JQUERY,
              </span>
              <br />
              <span className="text-3xl">
                JAVASCRIPT, NEXT, REACT, TYPESCRIPT
              </span>
              <br />
              <span className="text-sm">NODE, EXPRESS, MONGODB, MONGOOS,</span>
              <br />
              <span className="text-xl">FRAMER MOTION, HTML, XD,</span>
              <br />
              <span className="text-sm">
                WORDPRESS, TAILWIND, BOOTSTRAP, DAISYUI, HOSTING,REDUX, CANVA,
                JSON,
              </span>
              <br />
              <span className="text-4xl">RESPONSIVE</span>
            </p>
          </div>
        </div>
        <WAChatButton />
      </div>
    </>
  );
}
