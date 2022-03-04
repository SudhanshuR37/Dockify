import React from "react";
import "./todoList.css";
import { Todo } from "../model";
import TaskCard from "./TaskCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TaskCard
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        ></TaskCard>
      ))}
    </div>
  );
};

export default TodoList;
