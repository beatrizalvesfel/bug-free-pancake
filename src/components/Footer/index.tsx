/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className={styles.container}>
      <Link href="/">
        <img src="/logo-white.png" alt="Pollux Logo" />
      </Link>
      <div className={styles.texts}>
        <p className={styles.copy}>Feito com cafeína em Curitiba ©2020</p>
        <Link href="/">
          <p className={styles.name}>pollu-x.tech</p>
        </Link>
      </div>
    </section>
  );
};
