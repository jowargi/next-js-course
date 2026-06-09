"use client";

import { Racket } from "@/constants/mock";
import { FC, useCallback } from "react";
import styles from "./RacketCard.module.css";
import { useRouter } from "next/navigation";
import Img from "../img/Img";

interface RacketCardProps {
  racketId: Racket["id"];
  racketName: Racket["name"];
  racketImageUrl: Racket["imageUrl"];
}

const RacketCard: FC<RacketCardProps> = function ({
  racketId,
  racketName,
  racketImageUrl,
}) {
  const router = useRouter();

  const onClick = useCallback(
    (): void => router.push(`/racket/${racketId}`),
    [router, racketId],
  );

  return (
    <div className={styles.container} onClick={onClick}>
      <Img src={racketImageUrl} alt="" loading="lazy" className={styles.img} />
      <p className={styles.text}>{racketName}</p>
    </div>
  );
};

export default RacketCard;
