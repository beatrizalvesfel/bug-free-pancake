import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

import { Menu as MenuIcon } from "@styled-icons/zondicons/Menu";
import { Close } from "@styled-icons/evaicons-solid/Close";

export const Menu = () => {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const [page, setPage] = useState("/");

  useEffect(() => detectPage(), [router]);

  const detectPage = () => {
    setPage(router.pathname);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.content}>
          <div className={` menu-content  ${opened ? "opened" : ""}`}>
            <ul>
              <li>
                <Link href="/">
                  <a className={styles.item}>Inicío</a>
                </Link>
              </li>
              <li>
                <Link href="#sobre">
                  <a className={styles.item}>Sobre nós</a>
                </Link>
              </li>
              <li>
                <Link href="#clientes">
                  <a className={styles.item}>Clientes</a>
                </Link>
              </li>
              <li>
                <Link href="#contatos">
                  <a className={styles.item}>Contato</a>
                </Link>
              </li>
              {/* <li className={page === "/carreira" ? "active" : ""}>
                <Link href="/carreira">
                  <a className={styles.item}>Nossas vagas</a>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className={styles.mobileToggle}>
          <span>
            {!opened ? (
              <MenuIcon
                onClick={() => setOpened(!opened)}
                size="20"
                color="white"
              />
            ) : (
              <Close
                onClick={() => setOpened(!opened)}
                size="40"
                color="white"
              />
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};
