import React, { useState } from "react";
import styled from "styled-components";

interface AddTodoFormProps {
  addTodo: (text: string) => void;
}

const Form = styled.form`
  margin-top: 1rem;
`;
const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  background: yellow;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-left: 1rem;
  background: #8d6a91;
  color: black;
`;

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={text} onChange={handleChange} />
      <Button type="submit"> ADD TASK </Button>
    </Form>
  );
};

export default AddTodoForm;
