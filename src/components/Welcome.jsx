import Avatar from "../assets/avatar.jpg";

const Welcome = () => {
  return (
    <div className="main-welcome-wrapper">
      <h1>
        I am a <span>developer</span>
      </h1>
      <p>
        I also love <span>design</span>, <span>art</span> and{" "}
        <span>travel</span>.
      </p>
      <img src={Avatar} alt="" />
    </div>
  );
};

export default Welcome;
