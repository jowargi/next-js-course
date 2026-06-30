import { FC } from "react";
import styles from "./RacketsCarouselListItem.module.css";
import { Racket } from "@/types/racket";
import RacketCard from "../racketCard/RacketCard";

const RacketsCarouselListItem: FC<{ racket: Racket }> = function ({ racket }) {
  return (
    <li className={styles.item}>
      <RacketCard racket={racket} />
    </li>
  );
};

export default RacketsCarouselListItem;
