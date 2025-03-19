import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/user.gif";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
// import twitterLight from "../../assets/twitter-light.svg";
// import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  // const twitterIcon = theme === "light" ? twitterLight : twitterDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Karan's Profile Picture"
        />
        <img
          onClick={toggleTheme}
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          title="Switch Theme"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Karan <br />
          Chourasiya
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          {/* <a href="https://twitter.com">
            <img src={twitterIcon} alt="twitter" />
          </a> */}
          <a href="https://github.com/kar1905">
            <img src={githubIcon} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/karan-chourasiya-238144211/">
            <img src={linkedinIcon} alt="linkedin" />
          </a>
        </span>
        <p className={styles.description}>
          Here's where I try to convince you I know what I'm doing.{" "}
        </p>
        <a
          href="https://drive.google.com/file/d/14HUvOcbq6Oiiv6JuzaQwxHonsjjHIqxx/view?usp=sharing"
          target="_blank"
        >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}
