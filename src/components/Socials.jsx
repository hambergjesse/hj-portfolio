import { SocialIcon } from "react-social-icons";

const Socials = () => {
  return (
    <div className="main__socials--wrapper">
      <a
        href="https://github.com/hambergjesse"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon
          fgColor="var(--brand-main-white)"
          bgColor="none"
          network="github"
          className="main__footer--socials--item"
        />
      </a>
      <a href="https://twitter.com/hambjes" target="_blank" rel="noreferrer">
        <SocialIcon
          fgColor="var(--brand-main-white)"
          bgColor="none"
          network="twitter"
          className="main__footer--socials--item"
        />
      </a>
      <a
        href="https://mailto:hambergjesse@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon
          fgColor="var(--brand-main-white)"
          bgColor="none"
          network="email"
          className="main__footer--socials--item"
        />
      </a>
      <a
        href="https://linkedin.com/in/hambergjesse"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon
          fgColor="var(--brand-main-white)"
          bgColor="none"
          network="linkedin"
          className="main__footer--socials--item"
        />
      </a>
      <a
        href="https://instagram.com/hambergjesse"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon
          fgColor="var(--brand-main-white)"
          bgColor="none"
          network="instagram"
          className="main__footer--socials--item"
        />
      </a>
    </div>
  );
};

export default Socials;
