import React from "react";

import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("myyvrajn");
  if (state.succeeded) {
    return <p className="text-xl text-center mt-10">Message sent</p>;
  }

  return (
    <section className="w-full h-full flex flex-col justify-center   ">
      <p className="text-center mb-16">
        Thank you for visiting my portfolio! If you have any questions,
        collaboration inquiries, or simply want to say hello, don't hesitate to
        get in touch with me. I am excited to hear your ideas and address your
        queries. Please fill out the following form, and I will respond as soon
        as possible.
      </p>

      <h3 className="text-center text-xl font-black mb-4">Contact</h3>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-9 justify-center w-auto mx-auto overflow-hidden  p-5 rounded-md shadow-md "
      >
        <div className="flex   md:flex-row flex-col  md:justify-center  items-start gap-3  ">
          <div className="flex gap-2 justify-center items-center ">
            {/* email-------------------------- */}
            <label className="w-20">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="border-b-2 border-gray-400 mt-2 mb-2 outline-none focus:scale-105 duration-150 focus:border-skyblue "
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          {/* FIN EMAIL------------------------------ */}

          <div className="flex gap-2 justify-center items-center">
            <label className="w-20">Teléfono</label>
            <input
              id="phone"
              type="phone"
              name="phone"
              className=" border-gray-400 mt-2 mb-2 outline-none border-b-2 focus:scale-105 duration-150 focus:border-skyblue "
            />

            <ValidationError
              prefix="phone"
              field="phone"
              errors={state.errors}
            />
          </div>
        </div>
        {/* mensajes------------------------------ */}
        <label>Mensaje</label>
        <textarea
          id="message"
          name="message"
          className=" border-x-gray-400 mt-2 mb-2 outline-none border-b-2 focus:scale-105 px-5 duration-150 focus:border-skyblue "
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        {/* fin mensajes -------------------------------- */}

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-skyblue py-1  font-black text-white rounded-md shadow-md w-2/5 mx-auto hover:bg-black hover:text-white duration-150"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
