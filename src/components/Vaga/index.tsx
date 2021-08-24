import React from "react";
import styles from "./styles.module.scss";

const Vaga = React.memo(function Vaga() {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <div className={styles.texts}>
          <h1 className={styles.tittleVaga}>Dev | Python </h1>
          <span className={styles.description}>
            POLLUX - Curitiba, Paraná, Brasil - Período integral
          </span>
        </div>
        <span className={styles.tagRemoto}>remoto</span>
      </div>
    </section>
  );
});

export default Vaga;
