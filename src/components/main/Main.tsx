"use client";

import React, { FC, useRef } from "react";
import styles from "./Main.module.css";
import { useMainMinHeight } from "@/hooks/useMainMinHeight";

const Main: FC<{ children: React.ReactNode }> = function ({ children }) {
  const mainRef = useRef<HTMLElement>(null!);

  useMainMinHeight(mainRef);

  return (
    <main className={styles.main} ref={mainRef}>
      {children}
    </main>
  );
};

export default Main;
