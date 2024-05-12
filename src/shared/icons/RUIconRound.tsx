import React, { FC } from "react";

export const RUIconRound: FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="white" />
    <mask
      id="mask0_34_64"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="1"
      y="1"
      width="14"
      height="14"
    >
      <circle cx="7.99998" cy="8" r="6.54545" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_34_64)">
      <path
        d="M14.5899 12.282C14.5899 13.4149 13.9138 14.3333 13.0799 14.3333H2.51005C1.67616 14.3333 1.00006 13.4149 1.00006 12.282V10.2307H14.5899V12.282Z"
        fill="#CE2028"
      />
      <path
        d="M1.00006 5.10265H14.5899V10.2309H1.00006V5.10265Z"
        fill="#22408C"
      />
      <path
        d="M13.0799 0.999966H2.50998C1.6761 0.999966 1 1.91844 1 3.05127V5.10257H14.5899V3.05127C14.5899 1.91844 13.9138 0.999966 13.0799 0.999966Z"
        fill="#EEEEEE"
      />
    </g>
  </svg>
);
