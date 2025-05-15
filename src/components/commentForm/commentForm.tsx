import st from "./commentForm.module.css";
import { useState } from "react";
import axios from "axios";
import type { Comment } from "../../types/comments.type";

interface IProps {
  comments: Comment[] | [];
  setComments: React.Dispatch<React.SetStateAction<Comment[] | []>>;
}

export const CommentForm = ({ comments, setComments }: IProps) => {
  const [newComment, setNewComment] = useState("");

  // Добавление нового комментария
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const response = await axios.post("http://localhost:3000/comments", {
        text: newComment,
        timestamp: new Date().toISOString(),
      });

      setComments([...comments, response.data]);

      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={st.commentForm}>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        rows={1}
        className={`${st.textarea}`}
        placeholder="Оставьте комментарий"
      />

      <div className={st.btnBlock}>
        <button type="submit" className={st.btn}>
          <span className={st.btnTxt}>Отправить</span>
        </button>
      </div>
    </form>
  );
};
