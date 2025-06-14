
import githubIcon from "../assets/images/github.svg";
import arrow from "../assets/images/arrow.png";
import './ProjectCard.css';

const ProjectCard = ({ title, description, techStack, liveLink, codeLink, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className='project-image'/>
      <div className="info">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="tech-stack">{techStack}</div>
          <div className="project-links">
            {
              liveLink && <a href={liveLink} target="_blank" rel="noreferrer"><img src={arrow} alt="Arrow" className="arrow" /></a>
            }
            <a href={codeLink} target="_blank" rel="noreferrer"><img src={githubIcon} alt="Github-Icon" className="github-icon"/></a>
          </div>
        </div>
    </div>
  );
};

export default ProjectCard;
