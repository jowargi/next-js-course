import { Racket } from "@/constants/mock";
import { FC, JSX } from "react";
import styles from "./RacketsCatalog.module.css";
import RacketCardContainer from "../racketCard/RacketCardContainer";

const RacketsCatalog: FC<{ racketIds: Racket["id"][] }> = function ({
  racketIds,
}) {
  return (
    <div className={styles.container}>
      {racketIds.map(
        (racketId: Racket["id"]): JSX.Element => (
          <RacketCardContainer key={racketId} racketId={racketId} />
        ),
      )}
    </div>
  );
};

export default RacketsCatalog;
