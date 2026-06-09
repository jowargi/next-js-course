import { FC } from "react";
import styles from "./page.module.css";
import RacketsCatalogContainer from "@/components/racketsCatalog/RacketsCatalogContainer";

const RacketsPage: FC<PageProps<"/rackets">> = function () {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Ракетки</h2>
      <RacketsCatalogContainer />
    </section>
  );
};

export default RacketsPage;
