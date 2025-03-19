import styles from "./ProjectsStyles.module.css";
import "../../App.css";
import ProjectCard from "../../common/ProjectCard";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={project1}
          link="https://code-sync-72c1b14afd95.herokuapp.com/"
          h3="CodeSync"
          p="Code, Collaboration and More"
        />
        <ProjectCard
          src={project2}
          link="https://cryptoplace-mu.vercel.app/"
          h3="Cryptoplace"
          p="Real Time Crypto price tracking"
        />
        <ProjectCard
          src={project3}
          link="#"
          h3="Portfolio"
          p="The current website"
        />
        <ProjectCard
          src={project4}
          link=""
          h3="2rism"
          p="Ticket booking in real time (currently in progress)"
        />
      </div>
    </section>
  );
};

export default Projects;
