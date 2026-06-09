import { FC } from "react";
import { Racket, rackets } from "@/constants/mock";
import RacketsCarouselListItem from "./RacketsCarouselListItem";

const RacketsCarouselListItemContainer: FC<{ racketId: Racket["id"] }> =
  async function ({ racketId }) {
    const racket = rackets.find(
      (racket: Racket): boolean => racket.id === racketId,
    );

    if (!racket) return null;

    let racketImage: Blob;

    try {
      const racketImageResponse = await fetch(racket.imageUrl, {
        cache: "no-store",
      });

      if (!racketImageResponse.ok) return null;

      racketImage = await racketImageResponse.blob();
    } catch {
      return null;
    }

    return (
      <RacketsCarouselListItem
        racketId={racketId}
        racketName={racket.name}
        racketImage={racketImage}
      />
    );
  };

export default RacketsCarouselListItemContainer;
