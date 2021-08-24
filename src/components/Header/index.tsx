import styles from "./styles.module.scss";
import Image from "next/image";
import { Menu } from "../Menu";
import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image src="/logo-white.png" width={100} height={42} />
      </Link>
      <Menu />
    </div>
  );
};
