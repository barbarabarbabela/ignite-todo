import { InputHTMLAttributes } from "react";
import styled from "styled-components";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const Input = styled.input`
    border: 1px solid var(--gray-700);
    border-radius: 8px;
    width: 46rem;
    background-color: var(--gray-500);
    padding: 16px;
    color: var(--gray-300);
  `;

  return <Input {...props} />;
};
