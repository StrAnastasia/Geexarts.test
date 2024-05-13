import React, { FC, useMemo } from "react";
import styles from "./Images.module.css";

export const Images: FC<{ photos: string[] }> = ({ photos }) => {
  const photosLeft = useMemo(() => photos.length - 9, [photos]);

  const displayedPhotos = useMemo(
    () => photos.slice(0, photosLeft > 0 ? 9 : 9),
    [photos, photosLeft]
  );

  return (
    <div className={styles.imagesWrap}>
      {displayedPhotos.map((src) => (
        <img src={"/images" + src} alt={src} />
      ))}
      {photosLeft > 0 && <div className={styles.morePhotos}>+{photosLeft}</div>}
    </div>
  );
};
