import React, { FC } from "react";
import { User } from "../../../widgets/Posts/consts";
import Post from "../../../shared/PostComponents";
import { FollowUserCard } from "../../FollowUserCard";
import styles from "./styles.module.css";

const background: Record<number, string> = {
  0: "red",
  1: "blue",
  2: "yellow",
  3: "blue",
};

export const FollowFourUsers: FC<{ users: User[] }> = ({ users }) => (
  <Post.Wrapper>
    <div className={styles.grid}>
      {users.map((user, id: number) => (
        <div className={styles[background[id]]}>
          <FollowUserCard user={user} />
        </div>
      ))}
    </div>
  </Post.Wrapper>
);
