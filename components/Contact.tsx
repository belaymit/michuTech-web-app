'use client'
import { createElement, useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from "@emailjs/browser";
import { contactData } from '@/constants';

export default function Contact() {
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;
  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'service_gonc0ha',
       'template_28sg7th', 
       form.current, 
       'EYcaIBZlv4Oc1lA3E'
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };
  return (
    <section className="text-black flex justify-center" id="contact_us" style={{ background: "whitesmoke" }}>
    <Toaster />
    <div className="container mx-auto px-5 py-14 flex justify-center flex-col">
      <h2 className="title text-center text-3xl" data-aos="fade-down" style={{ color: "#0B82CF" }}>
        {contactData.Contact[0].title}
      </h2>
      <h4 className="subtitle text-blue-900 text-2xl text-center py-6" data-aos="fade-down">
        {contactData.Contact[0].subtitle}
      </h4>
      <br />
      <div className="flex flex-col md:flex-row justify-center p-2 gap-10 mx-auto custom-width-form">
      <form
        ref={form}
        onSubmit={sendEmail}
        data-aos="fade-up"
        className="flex-1 flex flex-col gap-5 md:w-1/2"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          required
          className="border border-slate-600 p-3 rounded"
        />
        <input
          type="email"
          name="user_email"
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
          placeholder="Email Id"
          required
          className="border border-slate-600 p-3 rounded"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border border-slate-600 p-3 rounded h-44"
          required
        ></textarea>
        <button
          className="btn self-start text-white p-2 rounded-md"
          style={{ background: "#0B82CF" }}
        >
          Submit
        </button>
      </form>

      <div className="flex-1 flex flex-col gap-5 md:w-1/2">
        {contactData?.Contact[0].social_media.map((content, i) => (
          <div
            key={i}
            data-aos="fade-down"
            data-aos-delay={i * 430}
            className="flex items-center gap-2"
          >
            <h4 style={{color:"#0B82CF"}}>{createElement(content.icon)}</h4>
            <a className="font-Poppins" href={content.link} target="_blank" rel="noreferrer">
              {content.text}
            </a>
          </div>
        ))}
      </div>
    </div>

    </div>
  </section>
  )
}