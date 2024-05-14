import React, { FC } from "react";
import { PostType } from "../../../widgets/Posts/consts";
import Post from "../../../shared/PostComponents";
import { TextInterSB } from "../../../shared";

export const PostWithVideo: FC<{ post: PostType }> = ({ post }) => (
  <Post.Wrapper>
    <Post.SportAndDate sport={post.sport || ""} date={post.date || ""} />
    <TextInterSB fontWeight={600} fontSize={"20px"} text={post.title || ""} />
    {post.text && <Post.Text text={post.text} />}
    <Post.Video video={post.video || ""} />
    <Post.SeenAndCommentsNumber
      seenNumber={post.seenNumber || 0}
      commentsNumber={post.commentsNumber || 0}
    />
    <Post.CommentsBlock comments={post.comments || []} seeMore={false} />
  </Post.Wrapper>
);
