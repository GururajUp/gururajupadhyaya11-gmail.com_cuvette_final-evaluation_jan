import React from "react";
import avatar from "./images/avatar.png";
import styles from "./ThemeFront.module.css";


function ThemeFront({ selectedTheme }) {
    let backgroundColor;
  if (selectedTheme === "light") {
    backgroundColor = "#fff";
  } else if (selectedTheme === "dark") {
    backgroundColor = "#171923";
  } else if (selectedTheme === "blue") {
    backgroundColor = "#508C9B";
  }
  return (
    <div className={styles.preview} style={{ backgroundColor }}>
      <div className={styles.chatRow}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <div className={styles.bubbleLeft}>Hello</div>
      </div>
      <div className={styles.chatRow}>
        <div className={styles.bubbleRight}>Hi</div>
      </div>
    </div>
  )
}

export default ThemeFront