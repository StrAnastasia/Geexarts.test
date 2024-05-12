import { Stack } from "@mui/material";
import React from "react";
import { FC } from "react";
import { Posts, RecommendedNews, RecommendedUsers } from "../../widgets";
import { Filters } from "../../features";
import { HomepageAd } from "../../shared";

export const HomePage: FC = () => {
  return (
    <Stack direction={"row"} gap={3}>
      <div style={{ width: "67%" }}>
        <Posts />
      </div>
      <Stack gap={3} sx={{ width: "33%" }}>
        <Filters />
        <HomepageAd />
        <RecommendedUsers />
        <RecommendedNews />
      </Stack>
    </Stack>
  );
};
