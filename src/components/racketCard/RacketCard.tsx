import { Racket } from "@/constants/mock";
import { FC } from "react";
import styles from "./RacketCard.module.css";
import Img from "../img/Img";
import NavLink from "../navLink/NavLink";

interface RacketCardProps {
  racketId: Racket["id"];
  racketName: Racket["name"];
  racketImageUrl: Racket["imageUrl"];
}

const RacketCard: FC<RacketCardProps> = function ({
  racketId,
  racketName,
  racketImageUrl,
}) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavLink
          href={`/racket/${racketId}`}
          borderRadius="rounded"
          fontSize="s"
        >
          ↗
        </NavLink>
      </nav>
      <Img
        src={racketImageUrl}
        alt={racketName}
        loading="lazy"
        className={styles.img}
      />
      <p className={styles.text}>{racketName}</p>
    </div>
  );
};

export default RacketCard;
