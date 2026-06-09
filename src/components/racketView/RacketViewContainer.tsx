import { Racket } from "@/constants/mock";
import { FC } from "react";
import { rackets } from "@/constants/mock";
import RacketView from "./RacketView";

const RacketViewContainer: FC<{ racketId: Racket["id"] }> = function ({
  racketId,
}) {
  const racket = rackets.find(
    (racket: Racket): boolean => racket.id === racketId,
  );

  if (!racket) return null;

  return (
    <RacketView
      racketName={racket.name}
      racketImageUrl={racket.imageUrl}
      racketPrice={racket.price}
      racketDescription={racket.description}
      racketBrandName={racket.brand.name}
    />
  );
};

export default RacketViewContainer;
