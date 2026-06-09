import { Racket } from "@/constants/mock";
import { FC } from "react";
import { rackets } from "@/constants/mock";
import RacketCard from "./RacketCard";

const RacketCardContainer: FC<{ racketId: Racket["id"] }> = function ({
  racketId,
}) {
  const racket = rackets.find(
    (racket: Racket): boolean => racket.id === racketId,
  );

  if (!racket) return null;

  return (
    <RacketCard
      racketId={racketId}
      racketName={racket.name}
      racketImageUrl={racket.imageUrl}
    />
  );
};

export default RacketCardContainer;
