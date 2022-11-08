const ExperienceItems = (props) => {
  const jobs = [
    {
      company: "Virittämö Helsinki",
      position: "Full Stack Developer",
      link: "https://virittamohelsinki.fi/",
      description: ["Currently working at this position."],
    },
    {
      company: "Digitalents Academy",
      position: "Web Development Intern",
      link: "https://stadinao.fi/nuorten-tyopajat/digitalentsacademy/",
      description: [
        "Used technologies such as React.js, JavaScript, SCSS/CSS3, HTML5, Node.js, Express.js, MongoDB, and Git to develop customer-focused and personal Front-End/Full-Stack projects while working within a Scrum team/Agile environment.",
      ],
    },
    {
      company: "ESE Entertainment",
      position: "Graphic Designer",
      link: "https://esegaming.com/",
      description: [
        "Modernised ESEs official social media pages by improving upon existing brand guidelines with an eye-catching and overall sleeker look.",
        "Tasked with creating sponsorship/partnership/event pitch decks for numerous international companies within the gaming and esports scene through ESE.",
        "Visually lead and assisted the continuous effort to bridge the gap between some of the biggest companies in the world and the world of gaming, esports and content creation.",
      ],
    },
    {
      company: "K1CK Esports",
      position: "Junior Designer",
      link: "https://k1ck.com/21/",
      description: [
        "Developed a better-fitting and overall improved look for K1CKs whole social mediapresence.",
        "Responsible for creating daily eye-catching design content for K1CKs social media plat-forms. Including tournament, livestream and video graphics.",
        "Produced print-ready design assets for clothing, advertisement boards, and office accessories.",
        "Built branding assets from concepts to fullfledged products for K1CKs many community projects.",
      ],
    },
  ];

  return (
    <div className="main__experience--sect">
      {!jobs
        ? "Loading..."
        : jobs.map((job, index) => (
            <div key={index}>
              <h2>
                {job.position} <span>@ {job.company}</span>
              </h2>
              {job.description.map((desc, index) => (
                <p key={index}>
                  <span>&#8226; </span>
                  {desc}
                </p>
              ))}
            </div>
          ))}
    </div>
  );
};

export default ExperienceItems;
