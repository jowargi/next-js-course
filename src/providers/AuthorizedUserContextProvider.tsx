"use client";

import { getUser } from "@/services/getUser";
import { User } from "@/types/user";
import React, { createContext, FC, use, useContext } from "react";

type AuthorizedUserContextValue = User | undefined;

interface AuthorizedUserContextProviderProps {
  children: React.ReactNode;
  getUserPromise: ReturnType<typeof getUser>;
}

const AuthorizedUserContext =
  createContext<AuthorizedUserContextValue>(undefined);

export const useAuthorizedUserContext = (): AuthorizedUserContextValue =>
  useContext(AuthorizedUserContext);

const AuthorizedUserContextProvider: FC<AuthorizedUserContextProviderProps> =
  function ({ children, getUserPromise }) {
    const { data: authorizedUser } = use(getUserPromise);

    return (
      <AuthorizedUserContext.Provider value={authorizedUser}>
        {children}
      </AuthorizedUserContext.Provider>
    );
  };

export default AuthorizedUserContextProvider;
