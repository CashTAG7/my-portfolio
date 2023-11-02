import Link from "next/link";

const NotFound = () => {
  return (
    <main className="text-center dark:bg-darker-gray h-screen py-56 text-dark-gray dark:text-lighter-gray">
      <h2 className=" text-5xl font-extrabold">Not found!</h2>
      <p className=" mt-8">Could not found the page you were looking for.</p>
      <p>
        Go back to <Link className="font-semibold" href={"/"}>Home Page</Link>?
      </p>
    </main>
  );
};

export default NotFound;
