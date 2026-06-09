"use client";

import { DragEvent, FC, RefObject, useCallback } from "react";

interface ImgProps {
  src?: string | Blob;
  alt?: string;
  loading?: "eager" | "lazy";
  ref?: RefObject<HTMLImageElement>;
  className?: string;
}

const Img: FC<ImgProps> = function ({ src, alt, loading, ref, className }) {
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
      ref={ref}
      className={className}
      onDragStart={onDragStart}
    />
  );
};

export default Img;
