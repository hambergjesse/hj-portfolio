import BackgroundIMG from "../assets/background.webp";

const Background = () => {
  const preLoadImage = (new Image().src = BackgroundIMG);

  return (
    <div className="background-wrapper">
      <img
        className="background-image"
        src={preLoadImage}
        alt="Website Background"
      />
    </div>
  );
};

export default Background;
