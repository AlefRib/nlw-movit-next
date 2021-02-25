import styles from "../styles/components/ExperienceBar.module.css";

const ExperienceBar = () => {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: "50%" }}></div>
        <span style={{ left: "50%" }} className={styles.currentExp}>
          300xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
};

export default ExperienceBar;
