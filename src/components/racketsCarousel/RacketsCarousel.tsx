import { FC, JSX } from "react";
import NavLink from "../navLink/NavLink";
import styles from "./RacketsCarousel.module.css";
import RacketsCarouselListItemContainer from "../racketsCarouselListItem/RacketsCarouselListItemContainer";
import { Racket } from "@/constants/mock";

const RacketsCarousel: FC<{ racketIds: Racket["id"][] }> = function ({
  racketIds,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Ракетки</h3>
        <nav>
          <NavLink href="/rackets">Все ↗</NavLink>
        </nav>
      </div>
      <ul className={styles.list}>
        {racketIds.map(
          (racketId: Racket["id"]): JSX.Element => (
            <RacketsCarouselListItemContainer
              key={racketId}
              racketId={racketId}
            />
          ),
        )}
      </ul>
    </div>
  );
};

export default RacketsCarousel;
