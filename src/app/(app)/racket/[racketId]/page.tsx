import { FC } from "react";
import styles from "./page.module.css";
import { getRacketById } from "@/services/getRacketById";
import { notFound } from "next/navigation";
import RacketView from "@/components/racketView/RacketView";
import ErrorFallback from "@/components/errorFallback/ErrorFallback";

const RacketPage: FC<PageProps<"/racket/[racketId]">> = async function ({
  params,
}) {
  const { racketId } = await params;

  const {
    isError,
    status,
    statusText,
    data: racket,
  } = await getRacketById(+racketId);

  if (isError && status === 404) return notFound();

  if (isError) return <ErrorFallback status={status} statusText={statusText} />;

  if (!racket) return null;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Ракетка</h2>
      <RacketView
        racketName={racket.name}
        racketImageUrl={racket.imageUrl}
        racketPrice={racket.price}
        racketDescription={racket.description}
        racketBrandName={racket.brand.name}
      />
    </section>
  );
};

export default RacketPage;
