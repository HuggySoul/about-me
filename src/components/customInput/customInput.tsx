import st from "./customInput.module.css";
import { useAutoResize } from "./useAutoResize";
import type { ICustomInput } from "./types";

/**Поле для ввода текста с автоизменением высоты*/
export const CustomInput = ({
  maxHeight = 100,
  defaultValue = "",
  fontWeight = 600,
  onChange,
  handleError = () => null,
  hasSubmitted = true,
  setIsEditing = () => {},
}: ICustomInput) => {
  const { value, handleChange, textAreaRef } = useAutoResize(defaultValue, onChange);

  /**Прокручиваем скролл вверх*/
  const toTop = () => {
    if (textAreaRef.current) textAreaRef.current.scrollTop = 0;
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  const errorMessage = handleError(value);
  const hasError = !!errorMessage;

  return (
    <div className={st.textareaWrapper}>
      <textarea
        style={{
          maxHeight: `${maxHeight}px`,
          fontWeight: `${fontWeight}`,
        }}
        rows={1}
        ref={textAreaRef}
        value={value}
        onChange={handleChange}
        className={`${st.titleInput}`}
        placeholder="Оставьте комментарий"
        onBlur={toTop}
        onClick={handleClick}
      />
      {hasError && hasSubmitted && <p className={st.error}>{errorMessage}</p>}
    </div>
  );
};
