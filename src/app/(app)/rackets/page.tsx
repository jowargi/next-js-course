import { FC } from "react";
import { getRackets } from "@/services/getRackets";
import { notFound } from "next/navigation";
import RacketsCatalog from "@/components/racketsCatalog/RacketsCatalog";
import { Metadata } from "next";
import { HttpError } from "@/errors/HttpError";

export const metadata: Metadata = {
  title: "Каталог теннисных ракеток",
  description:
    "Широкий выбор теннисных ракеток ведущих брендов. Подберите идеальную ракетку для своего стиля игры.",
};

const RacketsPage: FC<PageProps<"/rackets">> = async function () {
  const {
    isError,
    status,
    statusText,
    data: rackets,
  } = await getRackets({ page: 1, limit: 20 });

  if (isError && status === 404) return notFound();

  if (isError) throw new HttpError({ status, statusText });

  if (!rackets?.length) return null;

  return <RacketsCatalog rackets={rackets} />;
};

export default RacketsPage;
