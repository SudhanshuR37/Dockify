import React from "react";
import "./inputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="inputField">
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
