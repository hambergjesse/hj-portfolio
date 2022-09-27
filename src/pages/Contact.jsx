const Contact = () => {
  return (
    <div>
      <div className="main__contact--wrapper">
        <div className="main__contact--text--wrapper">
          <h1>
            <span>Need some help</span> <br />
            with something?
          </h1>
          <p>
            Turn your writing brain on and tell me everything about the dream
            application you need help building, <span>I'm all ears!</span>
          </p>
        </div>
        <div className="main__contact--form--wrapper">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" />
          </div>{" "}
          <div>
            <label htmlFor="message">Message:</label>
            <input type="text" name="message" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
