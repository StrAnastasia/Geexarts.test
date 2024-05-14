import React, { FC } from "react";
import { PostType } from "../../../widgets/Posts/consts";
import Post from "../../../shared/PostComponents";
import { UserDataAndFollow } from "../../UserDataAndFollow/UserDataAndFollow";

export const PostUserWonMedal: FC<{ post: PostType }> = ({ post }) => (
  <Post.Wrapper>
    <Post.SportAndDate sport={post.sport || ""} date={post.date || ""} />
    <UserDataAndFollow user={post.userData} />
    <Post.MedalInfo medalData={post.medalData} />
  </Post.Wrapper>
);
