import React, { FC } from "react";

export const RBIconRound: FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="white" />
    <mask
      id="mask0_10_458"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="2"
      y="2"
      width="20"
      height="20"
    >
      <circle cx="11.9998" cy="11.9979" r="9.81818" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_10_458)">
      <path
        d="M21.8848 18.4246C21.8848 20.1239 20.8707 21.5016 19.6198 21.5016H3.76498C2.51414 21.5016 1.5 20.1239 1.5 18.4246V15.3477H21.8848V18.4246Z"
        fill="#CE2028"
      />
      <path d="M1.5 7.64844H21.8848V15.3408H1.5V7.64844Z" fill="#22408C" />
      <path
        d="M19.6198 1.5H3.76498C2.51414 1.5 1.5 2.8777 1.5 4.57695V7.6539H21.8848V4.57695C21.8848 2.8777 20.8707 1.5 19.6198 1.5Z"
        fill="#EEEEEE"
      />
      <path
        d="M1.83329 21.974H22.7777C24.5572 21.974 26 20.5313 26 18.7518V15.5296H1.83329V21.974Z"
        fill="#4AA657"
      />
      <path
        d="M22.7777 1.02957H1.83329V15.5296H26V4.25179C26 2.47232 24.5572 1.02957 22.7777 1.02957Z"
        fill="#C8313E"
      />
    </g>
  </svg>
);
