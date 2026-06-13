import { FC, JSX } from "react";
import styles from "./loading.module.css";
import RacketCardSkeleton from "@/skeletons/racketCard/RacketCardSkeleton";

const RacketsLoading: FC = function () {
  return (
    <div className={styles.container}>
      {new Array(20).fill(undefined).map(
        (_, index: number): JSX.Element => (
          <RacketCardSkeleton key={index} />
        ),
      )}
    </div>
  );
};

export default RacketsLoading;
