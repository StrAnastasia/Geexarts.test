import { Stack } from "@mui/material";
import React from "react";
import { FC } from "react";
import { Account, RecommendedUsers } from "../../widgets";

export const EmptyAccount: FC = () => {
  return (
    <Stack direction={"row"} gap={3} sx={{minHeight: "88vh"}}>
      <div style={{ width: "67%" }}>
        <Account filled={false} />
      </div>
      <Stack gap={3} sx={{ width: "33%" }}>
        <RecommendedUsers />
      </Stack>
    </Stack>
  );
};
