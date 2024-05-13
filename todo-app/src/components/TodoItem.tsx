import React from "react";
import styled from "styled-components";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const ListItems = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: blue;
`;
const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <ListItems>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
    </ListItems>
  );
};

export default TodoItem;
