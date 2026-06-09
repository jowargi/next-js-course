"use client";

import { FC, PointerEvent, useCallback } from "react";
import NavLink from "../navLink/NavLink";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";

const Header: FC = function () {
  const router = useRouter();

  const onPointerDown = useCallback(
    (event: PointerEvent<HTMLHeadingElement>): void => event.preventDefault(),
    [],
  );

  const onClick = useCallback((): void => router.push("/"), [router]);

  return (
    <header className={styles.header}>
      <h1
        className={styles.title}
        onPointerDown={onPointerDown}
        onClick={onClick}
      >
        TENNIS STORE
      </h1>
      <nav className={styles.nav}>
        <NavLink href="/">Главная</NavLink>
        <NavLink href="/rackets">Ракетки</NavLink>
      </nav>
    </header>
  );
};

export default Header;
