"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import styles from "./NavLink.module.css";
import classNames from "classnames";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  style?: React.CSSProperties;
}

const NavLink: FC<NavLinkProps> = function ({ children, href, style }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={classNames(
        styles.link,
        styles[`link--${href === pathname ? "active" : "disabled"}`],
      )}
      style={style}
    >
      {children}
    </Link>
  );
};

export default NavLink;
