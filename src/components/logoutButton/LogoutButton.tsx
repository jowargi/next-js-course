"use client";

import { FC, useCallback, useTransition } from "react";
import Button from "../button/Button";
import { BASE_API_URL } from "@/constants/api";

const handleLogout = async (): Promise<void> => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    method: "DELETE",
    credentials: "include",
  });

  window.location.assign("/");
};

const LogoutButton: FC = function () {
  const [isPending, startTransition] = useTransition();

  const onClick = useCallback((): void => startTransition(handleLogout), []);

  return (
    <Button onClick={onClick} disabled={isPending}>
      Выход
    </Button>
  );
};

export default LogoutButton;
