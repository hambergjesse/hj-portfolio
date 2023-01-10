import { SocialIcon } from "react-social-icons";

const Socials = () => {
  return (
    <main className="main__socials--wrapper">
      <SocialIcon
        url="https://github.com/hambergjesse"
        target="_blank"
        rel="noreferrer"
        fgColor="var(--brand-main-white)"
        bgColor="none"
        network="github"
        className="main__footer--socials--item"
      />
      <SocialIcon
        url="https://twitter.com/hambjes"
        target="_blank"
        rel="noreferrer"
        fgColor="var(--brand-main-white)"
        bgColor="none"
        network="twitter"
        className="main__footer--socials--item"
      />
      <SocialIcon
        url="/contact"
        target="_blank"
        rel="noreferrer"
        fgColor="var(--brand-main-white)"
        bgColor="none"
        network="email"
        className="main__footer--socials--item"
      />
      <SocialIcon
        url="https://linkedin.com/in/hambergjesse"
        target="_blank"
        rel="noreferrer"
        fgColor="var(--brand-main-white)"
        bgColor="none"
        network="linkedin"
        className="main__footer--socials--item"
      />
      <SocialIcon
        url="https://instagram.com/hambergjesse"
        target="_blank"
        rel="noreferrer"
        fgColor="var(--brand-main-white)"
        bgColor="none"
        network="instagram"
        className="main__footer--socials--item"
      />
    </main>
  );
};

export default Socials;
