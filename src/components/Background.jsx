import BackgroundIMG from "../assets/background.png";

const Background = () => {
  return (
    <div className="background-wrapper">
      <img
        className="background-image"
        src={BackgroundIMG}
        alt="Website Background"
      />
    </div>
  );
};

export default Background;
