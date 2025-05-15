import st from "./commentCard.module.css";
import type { Comment } from "../../types/comments.type";

interface IProps {
  comment: Comment;
}

export const CommentCard = ({ comment }: IProps) => {
  return (
    <li className={st.comment} key={comment.id}>
      <p className={st.commentTxt}>{comment.text}</p>
      <small className={st.timeStamp}>
        {new Date(comment.timestamp).toLocaleString()}
      </small>
    </li>
  );
};
