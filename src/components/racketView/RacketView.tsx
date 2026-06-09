import { Racket } from "@/constants/mock";
import { FC } from "react";
import styles from "./RacketView.module.css";
import Img from "../img/Img";

interface RacketViewProps {
  racketName: Racket["name"];
  racketImageUrl: Racket["imageUrl"];
  racketPrice: Racket["price"];
  racketDescription: Racket["description"];
  racketBrandName: Racket["brand"]["name"];
}

const RacketView: FC<RacketViewProps> = function ({
  racketName,
  racketImageUrl,
  racketPrice,
  racketDescription,
  racketBrandName,
}) {
  return (
    <div className={styles.container}>
      <div className={styles["info-wrapper"]}>
        <p className={styles.brand}>{racketBrandName}</p>
        <h3 className={styles.title}>{racketName}</h3>
        <p className={styles.description}>{racketDescription}</p>
        <p className={styles.price}>{racketPrice} €</p>
      </div>
      <div className={styles["img-wrapper"]}>
        <Img src={racketImageUrl} alt="" className={styles.img} />
      </div>
    </div>
  );
};

export default RacketView;
