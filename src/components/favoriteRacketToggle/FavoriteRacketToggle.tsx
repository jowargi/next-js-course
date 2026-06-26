"use client";

import { FC } from "react";
import Button from "../button/Button";

const FavoriteRacketToggle: FC<{ isFavorite: boolean }> = function ({
  isFavorite,
}) {
  return isFavorite ? (
    <Button>Удалить из избранного</Button>
  ) : (
    <Button>Добавить в избранное</Button>
  );
};

export default FavoriteRacketToggle;
