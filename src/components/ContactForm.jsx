import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailValidator from "email-validator";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const formSubmitResult = (input, text) => {
    input(text, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (
      name.length > 0 &&
      EmailValidator.validate(email) === true &&
      message.length > 0
    ) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
          formSubmitResult(toast.success, "Email sent succesfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          formSubmitResult(toast.error, "Could not send email!");
        }
      );
    } else {
      console.log("double check the fields.");
      formSubmitResult(toast.warn, "Make sure all the fields are correct.");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="main__contact--form--wrapper">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="user_name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="user_email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>{" "}
        <div className="main__contact--form--message">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          />
        </div>
        <input id="submit-button" type="submit" value="Send Message" />
        <ToastContainer />
      </div>
    </form>
  );
};

export default ContactForm;
