"use client";

import { DragEvent, FC, useCallback } from "react";

interface ImgProps {
  src?: string | Blob;
  alt?: string;
  loading?: "eager" | "lazy";
  className?: string;
}

const Img: FC<ImgProps> = function ({ src, alt, loading, className }) {
  const onDragStart = useCallback(
    (event: DragEvent<HTMLImageElement>): void => event.preventDefault(),
    [],
  );

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      onDragStart={onDragStart}
    />
  );
};

export default Img;
