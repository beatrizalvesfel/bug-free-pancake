import React from "react";
import styles from "./styles.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Mouse() {
  const scrollBottom = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };
  return (
    <Link
      activeClass="active"
      to="sobre"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <span className={styles.mouse} onClick={scrollBottom}>
        <sup className={styles.sup}>
          <b className={styles.b}></b>
        </sup>
      </span>
    </Link>
  );
}
