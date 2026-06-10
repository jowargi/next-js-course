import { FC } from "react";
import { Racket, rackets } from "@/constants/mock";
import RacketsCarouselListItem from "./RacketsCarouselListItem";

const RacketsCarouselListItemContainer: FC<{ racketId: Racket["id"] }> =
  function ({ racketId }) {
    const racket = rackets.find(
      (racket: Racket): boolean => racket.id === racketId,
    );

    return racket ? (
      <RacketsCarouselListItem
        racketId={racketId}
        racketName={racket.name}
        racketImageUrl={racket.imageUrl}
      />
    ) : null;
  };

export default RacketsCarouselListItemContainer;
