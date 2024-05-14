import React, { FC } from "react";
import { PostType } from "../../../widgets/Posts/consts";
import Post from "../../../shared/PostComponents";
import { TextInterSB } from "../../../shared";

export const PostWithPictures: FC<{ post: PostType }> = ({ post }) => (
  <Post.Wrapper>
    <Post.SportAndDate sport={post.sport || ""} date={post.date || ""} />
    <TextInterSB fontWeight={600} fontSize={"20px"} text={post.title || ""} />
    <Post.Text text={post.text || ""} />
    <Post.Images photos={post.photos || []} />
    <Post.SeenAndCommentsNumber
      seenNumber={post.seenNumber || 0}
      commentsNumber={post.commentsNumber || 0}
    />
    <Post.CommentsBlock comments={post.comments} />
  </Post.Wrapper>
);
