import React, { useState } from "react";
import styled from "styled-components";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const App: React.FC = () => {
  const [todos, setTodo] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodo([...todos, newTodo]);
  };

  let toggleTodo = (id: number) => {
    let updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodo(updatedTodos);
  };

  return (
    <AppContainer>
      <AppHeader>TO-DO LIST</AppHeader>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </AppContainer>
  );
};

export default App;
