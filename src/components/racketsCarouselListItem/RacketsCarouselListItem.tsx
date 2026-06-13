import { FC } from "react";
import styles from "./RacketsCarouselListItem.module.css";
import { Racket } from "@/types/racket";
import RacketCard from "../racketCard/RacketCard";

interface RacketsCarouselListItemProps {
  racketId: Racket["id"];
  racketName: Racket["name"];
  racketImageUrl: Racket["imageUrl"];
}

const RacketsCarouselListItem: FC<RacketsCarouselListItemProps> = function ({
  racketId,
  racketName,
  racketImageUrl,
}) {
  return (
    <li className={styles.item}>
      <RacketCard
        racketId={racketId}
        racketName={racketName}
        racketImageUrl={racketImageUrl}
      />
    </li>
  );
};

export default RacketsCarouselListItem;
