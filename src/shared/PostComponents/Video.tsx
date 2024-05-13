import React, { FC } from "react";
import styles from "./Video.module.css";

export const Video: FC<{ video: string }> = ({ video }) => {
  return (
    <div className={styles.videoWrap}>
      <img src={"/images" + video} alt={video} />
      <div className={styles.overlay} />
      <div className={styles.playIcon}>
        <svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.67179 1.33613C3.68175 1.34277 3.69174 1.34943 3.70177 1.35612L12.4924 7.21655C12.7468 7.38608 12.9826 7.54326 13.1637 7.68933C13.3527 7.84177 13.5756 8.05317 13.7038 8.36242C13.8733 8.77118 13.8733 9.23057 13.7038 9.63932C13.5756 9.94858 13.3527 10.16 13.1637 10.3124C12.9826 10.4585 12.7467 10.6157 12.4924 10.7852L3.67181 16.6656C3.36091 16.8729 3.08135 17.0593 2.84413 17.1879C2.60674 17.3165 2.2809 17.4635 1.90059 17.4408C1.41412 17.4118 0.964746 17.1713 0.670739 16.7826C0.440886 16.4788 0.38246 16.1261 0.357824 15.8572C0.333206 15.5885 0.333228 15.2526 0.333254 14.8789L0.333255 3.1589C0.333255 3.14685 0.333254 3.13483 0.333254 3.12286C0.333228 2.7492 0.333206 2.4132 0.357824 2.14451C0.38246 1.87563 0.440886 1.52297 0.670739 1.21913C0.964746 0.830478 1.41412 0.589978 1.90059 0.560932C2.2809 0.538225 2.60674 0.685233 2.84413 0.813883C3.08134 0.942438 3.36089 1.12883 3.67179 1.33613Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
