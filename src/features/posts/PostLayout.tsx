import React, { FC, useMemo } from "react";
import { PostType } from "../../widgets/Posts/consts";
import { PostWithPictures } from "./PostWithPictures";
import { PostWithContestWinners } from "./PostWithContestWinners";
import { AdBanner } from "../../shared/PostComponents/AdBanner";
import { PostUserWonMedal } from "./PostUserWonMedal";
import { FollowFourUsers } from "./FollowFourUsers";
import { PostWithVideo } from "./PostWithVideo";

export const PostLayout: FC<{ post: PostType }> = ({ post }) => {
  const component = useMemo(() => {
    if (post.postType === "photos") return <PostWithPictures post={post} />;
    if (post.postType === "contest")
      return <PostWithContestWinners post={post} />;
    if (post.postType === "ad") return <AdBanner ad={post.adData} />;
    if (post.postType === "userWonMedal")
      return <PostUserWonMedal post={post} />;
    if (post.postType === "followUsers")
      return <FollowFourUsers users={post.users || []} />;
    if (post.postType === "video") return <PostWithVideo post={post} />;

    return <p>{post.title}</p>;
  }, [post]);

  return component;
};
