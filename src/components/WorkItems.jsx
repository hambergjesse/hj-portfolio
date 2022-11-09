const WorkItems = () => {
  const projects = [
    {
      name: "time-tracker",
      description:
        "A group graduation project commissioned by the Digitalents Academy staff to be used as their main way of keeping track of employee attendance and accounts.",
      technologies: [
        "HTML5",
        "SCSS",
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
      ],
      image:
        "https://github.com/hambergjesse/time-tracker/raw/main/repo-assets/readme-preview-image.jpg",
    },
    {
      name: "futurice-app",
      description:
        "A mobile-first Github profile revamp project for Futurice Academy's application process.",
      technologies: [
        "HTML5",
        "SCSS",
        "JavaScript",
        "ReactJS",
        "GITHUB-REST-API",
      ],
      image: "https://i.imgur.com/q74VTR4.png",
    },
    {
      name: "to be announced",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat unde eum consequuntur maiores officiis tenetur vitae nostrum quia inventore.",
      technologies: ["BEEP", "BOOP", "BEEP"],
      image: "https://i.imgur.com/GpprZni.jpg",
    },
  ];

  return (
    <>
      {!projects
        ? "Loading..."
        : projects.map((project, index) => (
            <div key={index} className="main__work--sect">
              <img src={project.image} alt="" />
              <h2>{project.name} </h2>
              <p>{project.description}</p>
              <div className="main__work--sect-tech">
                {project.technologies.map((tech, index) => (
                  <p key={index}>{tech}</p>
                ))}
              </div>
            </div>
          ))}
    </>
  );
};

export default WorkItems;
