import Link from "next/link";
import CoverImage from "./CoverImage";
import VSiteButton from "@/app/project/[slug]/VSiteButton";
import ProjectImages from "./ProjectImages";

import BackToTopButton from "./BackToTopButton";

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

async function getProject(slug: string | number) {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/projects/${slug}`, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

export default async function Page({
  params,
}: {
  params: { slug: string | number };
}) {
  const project: ProjectData = await getProject(params.slug);

  return (
    <>
      <title>{project.projectTitle}</title>

      <div className="pt-12 min-h-screen">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 pt-8">
          <Link
            className="bg-dark-gray dark:bg-light-gray text-lighter-gray dark:text-dark-gray font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            href={"/project"}
          >
            &larr;
          </Link>
        </div>

        <div className="">
          <BackToTopButton />
        </div>

        <p className="mt-44 text-center text-4xl text-dark-gray dark:text-lighter-gray font-semibold mb-4 tracking-widest">
          {project.projectTitle}
        </p>
        <hr className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 border-2 mb-2 border-dark-gray dark:border-light-gray" />
        <CoverImage id={params.slug} />
        <div className="md:flex dark:text-lighter-gray">
          <div className="md:w-1/2 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 md:my-8">
            <table className="table">
              <tbody>
                <tr>
                  <th className="text-lg">Date</th>
                  <td className="text-lg">{project.date}</td>
                </tr>
                <tr>
                  <th className="text-lg">Technology Used</th>
                  <td className="text-lg">{project.technologyUsed}</td>
                </tr>
                <tr>
                  <th className="text-lg">Team</th>
                  <td className="text-lg">{project.team}</td>
                </tr>
                <tr>
                  <th className="text-lg">Client</th>
                  <td className="text-lg">{project.client}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 md:w-1/2 my-8 text-lg">
            {project.fullDescription}
          </p>
        </div>
        <VSiteButton />
        <div>
          <ProjectImages />
        </div>
      </div>
    </>
  );
}
