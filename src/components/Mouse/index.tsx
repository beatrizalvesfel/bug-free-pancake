import React from "react";
import styles from "./styles.module.scss";

export default function Mouse() {
  const scrollBottom = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };
  return (
    <span className={styles.mouse} onClick={scrollBottom}>
      <sup className={styles.sup}>
        <b className={styles.b}></b>
      </sup>
    </span>
  );
}
