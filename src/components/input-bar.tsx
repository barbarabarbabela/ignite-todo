import styled from "styled-components";
import { Button } from "./Button/button";
import { Input } from "./input";
import { useState } from "react";

export const InputBar = () => {
  const FormContainer = styled.form`
    display: flex;
    gap: 0.5rem;

    position: absolute;
    top: 10.75rem;
    left: 50%;
    transform: translateX(-50%);

    height: 3.375rem;
  `;

  const [inputValue, setInputValue] = useState("");

  return (
    <FormContainer>
      <Input
        placeholder="Adicione uma nova tarefa"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Button />
    </FormContainer>
  );
};
