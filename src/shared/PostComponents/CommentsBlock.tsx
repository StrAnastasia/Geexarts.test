import React, { FC } from "react";
import styles from "./CommentsBlock.module.css";

import { TextInterSB } from "../TextInterSB";
import { Comment } from "../../widgets/Posts/consts";
import { Avatar } from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";

export const CommentsBlock: FC<{
  comments?: Comment[];
  seeMore?: boolean;
}> = ({ comments, seeMore = true }) => {
  if (!comments?.length) return null;
  return (
    <>
      <div className={styles.commBlock}>
        {comments.map((comment, ind) => (
          <>
            <hr color="#F1F3F7" />
            <CommentLayout comment={comment} ind={ind} />
            {comment.reply?.map((reply, repInd) => (
              <CommentLayout isReply={true} comment={reply} ind={repInd} />
            ))}
          </>
        ))}
      </div>
      {seeMore && (
        <button className={styles.seeAllComms}>
          <TextInterSB fontWeight={548} text="Смотреть все комментарии" />
        </button>
      )}
    </>
  );
};

const CommentLayout: FC<{
  comment: Comment;
  ind: number;
  isReply?: boolean;
}> = ({ comment, ind, isReply = false }) => (
  <div className={isReply ? styles.reply : ""}>
    <Avatar src={`/images/${comment.name}.png`} />
    <div>
      <div className={styles.nameWithIcon}>
        <TextInterSB color="#7B7EA5" text={comment.name} />
        {ind === 1 && (
          <VerifiedIcon sx={{ color: "#38C972", width: 16, height: 16 }} />
        )}
      </div>
      <TextInterSB fontWeight={548} text={comment.text} />
      <div className={styles.replyBlock}>
        <TextInterSB color="#7B7EA5" text={comment.howMuchTimeAgo} />
        <button>
          <TextInterSB fontWeight={548} text={"Ответить"} />
        </button>
      </div>
    </div>
  </div>
);
