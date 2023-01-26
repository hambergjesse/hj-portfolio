import k1ckOne from "../../assets/experience/work/k1ck-1.webp";
import k1ckTwo from "../../assets/experience/work/k1ck-2.webp";
import eseOne from "../../assets/experience/work/ese-1.webp";
import eseTwo from "../../assets/experience/work/ese-2.webp";

const ExperienceItems = () => {
  const jobs = [
    {
      company: "Virittämö Helsinki",
      position: "Full Stack Developer",
      duration: "Nov 2022 - Present",
      link: "https://virittamohelsinki.fi/",
      description: [
        "Responsible for developing projects using React.js, SCSS, and TypeScript for various clients. I worked in an agile development environment and delivered projects on time and within budget. I supported the project life-cycle and collaborated with diverse team members to design solutions that met the unique needs of clients.",
      ],
      images: [],
    },
    {
      company: "Digitalents Academy",
      position: "Web Development Intern",
      duration: "Feb 2022 - Oct 2022 · 8 mos",
      link: "https://stadinao.fi/nuorten-tyopajat/digitalentsacademy/",
      description: [
        "Used technologies such as React.js, JavaScript, SCSS/CSS3, HTML5, Node.js, Express.js, MongoDB, and Git to develop customer-focused and personal Front-End/Full-Stack projects while working within a Scrum team/Agile environment.",
      ],
      images: [],
    },
    {
      company: "ESE Entertainment",
      position: "Graphic Designer",
      duration: "Jul 2020 - Aug 2021 · 1 yr 2 mos",
      link: "https://esegaming.com/",
      description: [
        "Modernised ESEs official social media pages by improving upon existing brand guidelines with an eye-catching and overall sleeker look.",
        "Tasked with creating sponsorship/partnership/event pitch decks for numerous international companies within the gaming and esports scene through ESE.",
        "Visually lead and assisted the continuous effort to bridge the gap between some of the biggest companies in the world and the world of gaming, esports and content creation.",
      ],
      images: [eseOne, eseTwo],
    },
    {
      company: "K1CK Esports",
      position: "Junior Designer",
      duration: "Feb 2020 - Aug 2021 · 1 yr 7 mos",
      link: "https://k1ck.com/21/",
      description: [
        "Developed a better-fitting and overall improved look for K1CKs whole social mediapresence.",
        "Responsible for creating daily eye-catching design content for K1CKs social media plat-forms. Including tournament, livestream and video graphics.",
        "Produced print-ready design assets for clothing, advertisement boards, and office accessories.",
        "Built branding assets from concepts to fullfledged products for K1CKs many community projects.",
      ],
      images: [k1ckOne, k1ckTwo],
    },
  ];

  return (
    <>
      {!jobs
        ? "Loading..."
        : jobs.map((job, index) => (
            <div key={index} className="main__experience--sect">
              <h2>
                {job.position}{" "}
                <span>
                  @{" "}
                  <a target="_blank" rel="noreferrer" href={job.link}>
                    {job.company}
                  </a>
                </span>
              </h2>
              <p>{job.duration}</p>
              {job.description.map((desc, index) => (
                <p key={index}>
                  <span>&#8226; </span>
                  {desc}
                </p>
              ))}
              {!job.images.length > 0 ? (
                console.log("fuck")
              ) : (
                <div className="main__experience--sect-images">
                  {job.images.map((image, index) => (
                    <a
                      href={image}
                      key={index}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={image} alt="" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
    </>
  );
};

export default ExperienceItems;
