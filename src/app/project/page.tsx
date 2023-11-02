
import Cards from "./Cards";

const ProjectPage = () => {
  return (
    <>
      <title>Project</title>
      
      <div className="pt-56 pb-8 -z-50 dark:bg-darker-gray">
        <p className="text-center text-4xl text-dark-gray dark:text-lighter-gray font-semibold mb-4 tracking-widest">
          Projects
        </p>
        <hr className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 border-2 mb-8 border-dark-gray dark:border-light-gray" />
        <Cards />
      </div>
    </>
  );
};

export default ProjectPage;
