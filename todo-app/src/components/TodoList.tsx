import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ListContainer>
  );
};

export default TodoList;
