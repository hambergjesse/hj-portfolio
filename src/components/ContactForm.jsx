import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailValidator from "email-validator";

const ContactForm = () => {
  const formRef = useRef(),
    nameRef = useRef(),
    emailRef = useRef(),
    msgRef = useRef();

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

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = msgRef.current.value;

    if (
      name.length > 0 &&
      EmailValidator.validate(email) === true &&
      message.length > 0
    ) {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
        (result) => {
          console.log(result.text);
          formSubmitResult(toast.success, "Email sent succesfully!");
          formRef.current.reset();
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
    <form ref={formRef} onSubmit={sendEmail}>
      <div className="main__contact--form--wrapper">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="user_name" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="user_email" ref={emailRef} />
        </div>{" "}
        <div className="main__contact--form--message">
          <label htmlFor="message">Message:</label>
          <textarea name="message" ref={msgRef} />
        </div>
        <input id="submit-button" type="submit" value="Send Message" />
        <ToastContainer />
      </div>
    </form>
  );
};

export default ContactForm;
