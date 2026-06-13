import { FC } from "react";
import styles from "./ErrorFallback.module.css";

interface ErrorFallbackProps {
  status: number;
  statusText: string;
}

const ErrorFallback: FC<ErrorFallbackProps> = function ({
  status,
  statusText,
}) {
  return (
    <div className={styles.container}>
      <p className={styles.status}>{status}</p>
      <p className={styles["status-text"]}>{statusText}</p>
    </div>
  );
};

export default ErrorFallback;
