import st from "./app.module.css";

function App() {
  return (
    <main className={st.main}>
      <h1>Федченко Артём, ПМ-25</h1>
      <article>
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
      </article>
    </main>
  );
}

export default App;
