import { FC } from "react";
import { Racket, rackets } from "@/constants/mock";
import RacketsCarousel from "./RacketsCarousel";

const RacketsCarouselContainer: FC<{ limit?: number }> = function ({
  limit = 10,
}) {
  const racketIds = rackets
    .map((racket: Racket): Racket["id"] => racket.id)
    .slice(0, limit);

  return racketIds.length ? <RacketsCarousel racketIds={racketIds} /> : null;
};

export default RacketsCarouselContainer;
