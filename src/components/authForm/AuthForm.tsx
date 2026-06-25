"use client";

import { FC } from "react";
import styles from "./AuthForm.module.css";
import Button from "../button/Button";
import InputField from "../inputField/InputField";

interface AuthFormProps {
  action: string | ((formData: FormData) => void | Promise<void>);
  disabled: boolean;
}

const AuthForm: FC<AuthFormProps> = function ({ action, disabled }) {
  return (
    <form action={action} className={styles.form}>
      <InputField
        type="text"
        id="log"
        name="login"
        required={true}
        labelText="Логин"
      />
      <InputField
        type="password"
        id="pswd"
        name="password"
        required={true}
        labelText="Пароль"
      />
      <div className={styles.controls}>
        <Button type="submit" disabled={disabled}>
          Отправить
        </Button>
        <Button type="reset" disabled={disabled}>
          Сбросить
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
