import { FC, JSX } from "react";
import NavLink from "../navLink/NavLink";
import styles from "./RacketsCarousel.module.css";
import { Racket } from "@/types/racket";
import RacketsCarouselListItem from "../racketsCarouselListItem/RacketsCarouselListItem";

interface RacketsCarouselProps {
  rackets: Racket[];
  racketsCarouselTitle?: string;
  linkHref?: string;
  linkText?: string;
}

const RacketsCarousel: FC<RacketsCarouselProps> = function ({
  rackets,
  racketsCarouselTitle = "Ракетки",
  linkHref = "/rackets",
  linkText = "Все ↗",
}) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{racketsCarouselTitle}</h3>
        <nav>
          <NavLink href={linkHref}>{linkText}</NavLink>
        </nav>
      </div>
      <ul className={styles.list}>
        {rackets.map(
          (racket: Racket): JSX.Element => (
            <RacketsCarouselListItem key={racket.id} racket={racket} />
          ),
        )}
      </ul>
    </div>
  );
};

export default RacketsCarousel;
