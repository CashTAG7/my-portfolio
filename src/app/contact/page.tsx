import ContactForm from "./ContactForm";
import MediaLinks from "./MediaLinks";

export default function Contact() {
  return (
    <>
      <title>Contact</title>
      <div className="pt-12 min-h-screen">
        <p className="mt-44 text-center text-4xl text-dark-gray dark:text-lighter-gray font-semibold mb-4 tracking-widest">
          Contact Me
        </p>
        <hr className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 border-2 mb-8 border-dark-gray" />
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 md:flex">
          <ContactForm />
          <MediaLinks />
        </div>
        <p className="mx-8 py-8 text-center text-xl text-darker-gray dark:text-lighter-gray">
          Feel free to reach me any time...
        </p>
      </div>
    </>
  );
}
