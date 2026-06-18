"use client";

import "./reset.css";
import "./globals.css";
import "./main.css";
import styles from "./global-error.module.css";
import { Open_Sans } from "next/font/google";
import { FC } from "react";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

interface GlobalErrorProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

const GlobalError: FC<GlobalErrorProps> = function ({ error }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <div className={styles.container}>
          <p className={styles.name}>{error.name}</p>
          <p className={styles.message}>{error.message}</p>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
