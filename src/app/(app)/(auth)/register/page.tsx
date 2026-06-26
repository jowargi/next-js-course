"use client";

import AuthForm from "@/components/authForm/AuthForm";
import { FC, useActionState, useEffect } from "react";
import { registerAction, RegisterActionState } from "./register-action";
import styles from "./page.module.css";

const RegisterPage: FC = function () {
  const [state, formAction, isPending] = useActionState<RegisterActionState>(
    registerAction,
    {},
  );

  const { error, redirectTo } = state;

  useEffect((): void => {
    if (redirectTo) {
      window.location.assign("/");
    }
  }, [redirectTo]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Регистрация</h3>
      <AuthForm action={formAction} disabled={isPending} />
      {error && (
        <p className={styles.error}>Что-то пошло не так, попробуйте снова</p>
      )}
    </div>
  );
};

export default RegisterPage;
