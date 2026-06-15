import { FC } from "react";
import { getRackets } from "@/services/getRackets";
import { notFound } from "next/navigation";
import RacketsCatalog from "@/components/racketsCatalog/RacketsCatalog";
import ErrorFallback from "@/components/errorFallback/ErrorFallback";

const RacketsPage: FC<PageProps<"/rackets">> = async function () {
  const {
    isError,
    status,
    statusText,
    data: rackets,
  } = await getRackets({ page: 1, limit: 20 });

  if (isError && status === 404) return notFound();

  if (isError) return <ErrorFallback status={status} statusText={statusText} />;

  if (!rackets?.length) return null;

  return <RacketsCatalog rackets={rackets} />;
};

export default RacketsPage;
