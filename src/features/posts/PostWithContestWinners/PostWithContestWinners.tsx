import React, { FC } from "react";
import { PostType } from "../../../widgets/Posts/consts";
import Post from "../../../shared/PostComponents";
import { TextInterSB } from "../../../shared";

export const PostWithContestWinners: FC<{ post: PostType }> = ({ post }) => {
  return (
    <Post.Wrapper>
      <Post.SportAndDate sport={post.sport || ""} date={post.date || ""} />
      <TextInterSB fontWeight={600} fontSize={"20px"} text={post.title || ""} />
      <Post.WinnersStand winners={post.winnersNames || []} />
      <TextInterSB color="#7B7EA5" text="Лучшие моменты соревнования" />
      <Post.BestMoments videos={post.bestMoments || []} />
    </Post.Wrapper>
  );
};
