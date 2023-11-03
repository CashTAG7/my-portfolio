import Image from "next/image";
import Link from "next/link";

import projects from "./ProjectData";
import cover1 from "../project/assets/projectAssets/menu.png";
import cover2 from "../project/assets/image1.jpg";
import cover3 from "../project/assets/image2.jpg";
import cover4 from "../project/assets/image3.jpg";

import { CgCalendarDates } from "react-icons/cg";
import { SiSitecore } from "react-icons/si";

const coverImages = [cover1, cover2, cover3, cover4];

type ProjectData = {
  id: number;
  projectTitle: string;
  date: string;
  technologyUsed: string;
  team: string;
  projectRole: string;
  client: string;
  shortDescription: string;
  fullDescription: string;
};

// json-server --watch --port 4000 ./_data/db.json
// async function getProjects() {
//   const res = await fetch(`http://localhost:4000/projects/`, {
//     next: {
//       revalidate: 60,
//     },
//   });

//   return res.json();
// }

// export default async function Cards() {
//   const projects = await getProjects();
//   return (

export default function Cards() {
  return (
    <div className="-z-50">
      {" "}
      {projects.map((project, index) => {
        return (
          <Link
            key={project.id}
            href={`/project/${project.id}`}
            className="card card-side bg-light-gray dark:bg-dark-gray dark:text-lighter-gray border-2 border-r-8 border-b-8 border-dark-gray dark:border-lighter-gray rounded-xl my-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 hover:shadow-xl dark:hover:shadow-lg hover:shadow-dark-gray dark:hover:shadow-light-gray"
          >
            <figure className="ml-2">
              <Image
                className="border-2 rounded-lg border-dark-gray"
                src={coverImages[index]}
                alt="Cover Image"
                width={200}
                height={200}
              />
            </figure>
            <div className="card-body my-auto text-dark-gray dark:text-lighter-gray">
              <span className="badge badge-sm absolute top-1 right-1 rounded-md py-3 bg-light-gray dark:bg-dark-gray dark:text-lighter-gray dark:border-dark-gray">
                <CgCalendarDates size={20} /> {project.date}
              </span>
              <h2 className="card-title mt-2 items-center">
                <SiSitecore size={24} /> {project.projectTitle}
              </h2>
              <p>{project.shortDescription}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
