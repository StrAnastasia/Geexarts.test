import React, { FC } from "react";
import { posts } from "./consts";
import { PostLayout } from "../../features/posts/PostLayout";
import { Stack } from "@mui/material";

export const Posts: FC = () => {
  return (
    <Stack gap={"20px"}>
      {posts.map((post) => (
        <PostLayout post={post} />
      ))}
    </Stack>
  );
};
