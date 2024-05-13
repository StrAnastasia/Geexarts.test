import { Stack } from "@mui/material";
import React from "react";
import { FC } from "react";
import { Account, RecommendedUsers } from "../../widgets";

export const FilledInAccount: FC = () => {
  return (
    <Stack direction={"row"} gap={3} sx={{minHeight: "88vh"}}>
      <div style={{ width: "67%" }}>
        <Account filled={true} />
      </div>
      <Stack gap={3} sx={{ width: "33%" }}>
        <RecommendedUsers />
      </Stack>
    </Stack>
  );
};
