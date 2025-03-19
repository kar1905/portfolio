import styles from "./SkillsStyles.module.css";
import checkmarkIcon from "../../assets/checkmark-dark.svg";
import SkillsList from "../../common/SkillsList";
function Skills() {
  return (
    <section className={styles.container} id="skills">
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillsList}>
        <SkillsList src={checkmarkIcon} skill="HTML" />
        <SkillsList src={checkmarkIcon} skill="CSS" />
        <SkillsList src={checkmarkIcon} skill="JAVASCRIPT" />
        <SkillsList src={checkmarkIcon} skill="Typescript" />
        <SkillsList src={checkmarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillsList}>
        <SkillsList src={checkmarkIcon} skill="React" />
        <SkillsList src={checkmarkIcon} skill="Tailwind CSS" />
        <SkillsList src={checkmarkIcon} skill="Redux" />
        <SkillsList src={checkmarkIcon} skill="Web sockets" />
        <SkillsList src={checkmarkIcon} skill="Git" />
      </div>
    </section>
  );
}

export default Skills;
