"use client";

import { FC, useCallback, useEffect, useRef } from "react";
import styles from "./RacketsCarouselListItem.module.css";
import { useRouter } from "next/navigation";
import { Racket } from "@/constants/mock";
import Img from "../img/Img";

interface RacketsCarouselListItemProps {
  racketId: Racket["id"];
  racketName: Racket["name"];
  racketImage: Blob;
}

const RacketsCarouselListItem: FC<RacketsCarouselListItemProps> = function ({
  racketId,
  racketName,
  racketImage,
}) {
  const router = useRouter();

  const onClick = useCallback(
    (): void => router.push(`/racket/${racketId}`),
    [router, racketId],
  );

  const imgRef = useRef<HTMLImageElement>(null!);

  useEffect(() => {
    const racketImageURL = URL.createObjectURL(racketImage);

    imgRef.current.src = racketImageURL;

    return (): void => URL.revokeObjectURL(racketImageURL);
  }, [racketImage]);

  return (
    <li className={styles.item} onClick={onClick}>
      <Img alt="" ref={imgRef} className={styles.img} />
      <p className={styles.text}>{racketName}</p>
    </li>
  );
};

export default RacketsCarouselListItem;
