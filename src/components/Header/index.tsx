/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import { Menu } from "../Menu";
import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <img className={styles.logo} src="/logo-white.png" alt="Logo" />
      </Link>
      <Menu />
    </div>
  );
};
