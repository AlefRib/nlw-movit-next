import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://scontent.fgru5-1.fna.fbcdn.net/v/t1.0-1/s200x200/46301092_2365083890170593_97070916634148864_o.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_eui2=AeGf9zL6bD0IPD5gGiAb34KyVBAI0Ub7K8BUEAjRRvsrwJgJcfIVyN6IMY9aAEnHUHsSV0qqtJCy5i6Ml9LC91rA&_nc_ohc=_9mSsCRY63wAX8YLW5q&_nc_ht=scontent.fgru5-1.fna&tp=7&oh=fbe6923bfa260b28269d1a9f6457688e&oe=605CE817"
        alt="Alef Ribeiro"
      />
      <div>
        <strong>Alef Ribeiro</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
