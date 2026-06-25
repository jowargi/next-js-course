"use client";

import { getTopRackets } from "@/services/getTopRackets";
import { FC, JSX, use } from "react";
import styles from "./TopRacketsCatalog.module.css";
import { notFound } from "next/navigation";
import { Racket } from "@/types/racket";
import RacketCard from "../racketCard/RacketCard";
import { HttpError } from "@/errors/HttpError";

interface TopRacketsCatalogProps {
  getTopRacketsPromise: ReturnType<typeof getTopRackets>;
}

const TopRacketsCatalog: FC<TopRacketsCatalogProps> = function ({
  getTopRacketsPromise,
}) {
  const {
    isError,
    status,
    statusText,
    data: rackets,
  } = use(getTopRacketsPromise);

  if (isError && status === 404) notFound();

  if (isError) throw new HttpError({ status, statusText });

  if (!rackets?.length) return null;

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

export default TopRacketsCatalog;
