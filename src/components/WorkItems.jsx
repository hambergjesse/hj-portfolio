import timeTracker from "../assets/experience/time-tracker.webp";
import futuriceApp from "../assets/experience/futurice-app.webp";
import tempImage from "../assets/experience/temp-image.webp";

const WorkItems = () => {
  const preLoadImage = (url) => {
    const result = (new Image().src = url);
    return result;
  };

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
      image: preLoadImage(timeTracker),
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
      image: preLoadImage(futuriceApp),
    },
    {
      name: "to be announced",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat unde eum consequuntur maiores officiis tenetur vitae nostrum quia inventore.",
      technologies: ["BEEP", "BOOP", "BEEP"],
      image: preLoadImage(tempImage),
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
