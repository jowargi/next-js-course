import { Racket } from "@/types/racket";
import { FC, JSX } from "react";
import styles from "./RacketsCatalog.module.css";
import RacketCard from "../racketCard/RacketCard";

const RacketsCatalog: FC<{ rackets: Racket[] }> = function ({ rackets }) {
  return (
    <div className={styles.container}>
      {rackets.map(
        (racket: Racket): JSX.Element => (
          <RacketCard
            key={racket.id}
            racketId={racket.id}
            racketName={racket.name}
            racketImageUrl={racket.imageUrl}
          />
        ),
      )}
    </div>
  );
};

export default RacketsCatalog;
