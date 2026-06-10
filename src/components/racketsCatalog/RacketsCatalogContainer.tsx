import { FC } from "react";
import { Racket, rackets } from "@/constants/mock";
import RacketsCatalog from "./RacketsCatalog";

const RacketsCatalogContainer: FC = function () {
  const racketIds = rackets.map((racket: Racket): Racket["id"] => racket.id);

  return racketIds.length ? <RacketsCatalog racketIds={racketIds} /> : null;
};

export default RacketsCatalogContainer;
