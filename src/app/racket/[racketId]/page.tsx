import { FC } from "react";
import styles from "./page.module.css";
import { Racket, rackets } from "@/constants/mock";
import RacketViewContainer from "@/components/racketView/RacketViewContainer";

export const generateStaticParams = (): { racketId: string }[] =>
  rackets.slice(0, 5).map((racket: Racket): { racketId: string } => ({
    racketId: racket.id.toString(),
  }));

const RacketPage: FC<PageProps<"/racket/[racketId]">> = async function ({
  params,
}) {
  const { racketId } = await params;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Ракетка</h2>
      <RacketViewContainer racketId={+racketId} />
    </section>
  );
};

export default RacketPage;
