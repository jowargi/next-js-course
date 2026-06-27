"use client";

import { useAuthorizedUserContext } from "@/providers/AuthorizedUserContextProvider";
import { FC } from "react";
import styles from "./page.module.css";

const AdminPage: FC = function () {
  const user = useAuthorizedUserContext();

  if (!user) return null;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Панель управления</h2>
      <p className={styles.text}>С возвращением, {user.login}!</p>
    </section>
  );
};

export default AdminPage;
