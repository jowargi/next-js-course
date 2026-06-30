import { Racket } from "@/types/racket";
import { FC } from "react";
import styles from "./RacketCard.module.css";
import Img from "../img/Img";
import NavLink from "../navLink/NavLink";
import PendingLinkContent from "../pendingLinkContent/PendingLinkContent";
import FavoriteToggle from "../favoriteToggle/FavoriteToggle";

const RacketCard: FC<{ racket: Racket }> = function ({ racket }) {
  return (
    <div className={styles.container}>
      {racket.userData && (
        <div className={styles.toggle}>
          <FavoriteToggle
            racketId={racket.id}
            isFavorite={racket.userData.isFavorite}
            addLabel="☆"
            removeLabel="★"
            borderRadius="rounded"
            fontSize="s"
          />
        </div>
      )}
      <nav className={styles.nav}>
        <NavLink
          href={`/racket/${racket.id}`}
          borderRadius="rounded"
          fontSize="s"
        >
          <PendingLinkContent linkContent="↗" />
        </NavLink>
      </nav>
      <Img
        src={racket.imageUrl}
        alt={racket.name}
        loading="lazy"
        className={styles.img}
      />
      <p className={styles.text}>{racket.name}</p>
    </div>
  );
};

export default RacketCard;
