import React, { useState, useRef, useEffect } from "react";
import "./taskCard.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdFileDownloadDone } from "react-icons/md";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  key: number;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskCard: React.FC<Props> = ({ todo, key, todos, setTodos }) => {
  const handleDone = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((t) => (t.id === id ? { ...t, todo: editTodo } : t)));
    setEdit(false);
  };

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="taskCard" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          className="taskCard__input"
          onChange={(e) => setEditTodo(e.target.value)}
        ></input>
      ) : todo.isDone ? (
        <s className="taskCard__todo">{todo.todo}</s>
      ) : (
        <span className="taskCard__todo">{todo.todo}</span>
      )}
      <div className="taskCard__operations">
        <span className="taskCard__operations__icon">
          <AiFillEdit
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              } else {
                setEdit(!edit);
              }
            }}
          ></AiFillEdit>
        </span>
        <span className="taskCard__operations__icon">
          <AiFillDelete onClick={() => handleDelete(todo.id)}></AiFillDelete>
        </span>
        <span className="taskCard__operations__icon">
          <MdFileDownloadDone
            onClick={() => handleDone(todo.id)}
          ></MdFileDownloadDone>
        </span>
      </div>
    </form>
  );
};

export default TaskCard;
