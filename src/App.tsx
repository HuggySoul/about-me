import axios from "axios";
import { useEffect, useState } from "react";
import st from "./app.module.css";
import { CommentForm } from "./components/commentForm";
import type { Comment } from "./types/comments.type";
import { CommentCard } from "./components/commentCard";

function App() {
  const [comments, setComments] = useState<Comment[]>([]);

  // Загрузка комментариев при монтировании
  useEffect(() => {
    axios
      .get("http://localhost:3000/comments")
      .then((response) => setComments(response.data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  return (
    <main className={st.main}>
      <h1>Федченко Артём, ПМ-25</h1>
      <article className={st.aboutMe}>
        <div className={st.aboutMeTxt}>
          <h2>Обо мне</h2>
          <p className={st.regularTxt}>
            <a href="https://disk.yandex.ru/i/lfltmY4LGDqVPA" target="_blank">
              Ссылка на резюме
            </a>
          </p>
          <p className={st.regularTxt}>
            {" "}
            <a href="https://github.com/HuggySoul" target="_blank">
              Ссылка на GitHub
            </a>
          </p>
        </div>
      </article>
      <article className={st.comments}>
        <h2>Комментарии</h2>
        <CommentForm comments={comments} setComments={setComments} />
        <ul className={st.commentsList}>
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </ul>
      </article>
    </main>
  );
}

export default App;
