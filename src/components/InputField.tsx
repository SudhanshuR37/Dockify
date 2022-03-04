import React from "react";
import "./inputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="inputField" onSubmit={(e) => handleAdd(e)}>
      <input
        type="input"
        placeholder="Enter a Task"
        className="inputField__input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button type="submit" className="inputField__button">
        Add
      </button>
    </form>
  );
};

export default InputField;
