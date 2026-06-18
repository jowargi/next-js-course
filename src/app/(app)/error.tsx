"use client";

import { FC } from "react";
import styles from "./error.module.css";

interface AppErrorProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

const AppError: FC<AppErrorProps> = function ({ error }) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{error.name}</p>
      <p className={styles.message}>{error.message}</p>
    </div>
  );
};

export default AppError;
