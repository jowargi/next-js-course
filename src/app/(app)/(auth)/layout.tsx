import { FC } from "react";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Аутентификация",
  description: "Вход в личный кабинет или регистрация нового аккаунта.",
};

const AuthLayout: FC<LayoutProps<"/">> = function ({ children }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Учетная запись</h2>
      {children}
    </section>
  );
};

export default AuthLayout;
