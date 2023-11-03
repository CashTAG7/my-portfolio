"use client";
import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mrgwjnnj");
  if (state.succeeded) {
    return (
      <div className="w-full md:w-2/3 flex items-center justify-center">
        <p className="text-2xl text-center font-semibold text-dark-gray dark:text-lighter-gray">
          Thanks for the messsage. You will be contacted in a moment.
        </p>
      </div>
    );
  }
  return (
    <form
      action={"https://formspree.io/f/mrgwjnnj"}
      method="post"
      onSubmit={handleSubmit}
      className="w-full md:w-2/3"
    >
      <div className="flex flex-col mb-3 text-darker-gray dark:text-lighter-gray">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="px-8 py-2 bg-dark-gray border border-dark-gray text-light-gray dark:text-dark-gray focus:border-light-gray focus:outline-none focus:bg-dark-gray focus:text-lighter-gray dark:bg-light-gray dark:border-light-gray dark:focus:text-dark-gray"
          autoComplete="off"
          required
        />
      </div>
      <div className="flex flex-col mb-3 text-darker-gray dark:text-lighter-gray">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="px-8 py-2 bg-dark-gray border  border-dark-gray text-light-gray dark:text-dark-gray focus:border-light-gray focus:outline-none focus:bg-dark-gray focus:text-lighter-gray dark:bg-light-gray dark:border-light-gray dark:focus:text-dark-gray"
          autoComplete="off"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col mb-3 dark:text-lighter-gray">
        <label htmlFor="message">Message</label>
        <textarea
          rows={4}
          id="message"
          name="message"
          className="px-8 py-2 bg-dark-gray border  border-dark-gray text-light-gray dark:text-dark-gray focus:border-light-gray focus:outline-none focus:bg-dark-gray focus:text-lighter-gray dark:bg-light-gray dark:border-light-gray dark:focus:text-dark-gray"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="w-full pt-3">
        <button
          type="submit"
          className="w-full bg-dark-gray dark:bg-light-gray md:rounded-md text-lighter-gray dark:text-dark-gray px-8 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-light-gray dark:hover:bg-dark-gray hover:text-dark-gray dark:hover:text-lighter-gray text-xl cursor-pointer"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
