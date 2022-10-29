import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="main__contact--form--wrapper">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="user_name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="user_email" />
        </div>{" "}
        <div className="main__contact--form--message">
          <label htmlFor="message">Message:</label>
          <textarea name="message" />
        </div>
        <input id="submit-button" type="submit" value="Send Message" />
      </div>
    </form>
  );
};

export default ContactForm;
