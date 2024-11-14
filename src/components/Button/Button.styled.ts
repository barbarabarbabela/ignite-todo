import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 5.625rem;
  border-radius: 8px;
  background-color: var(--blue-dark);
  color: var(--gray-100);
  font-size: 0.875rem;
  font-weight: 700;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: var(--blue);
    transition: background-color 0.1s ease-in-out;
  }
`;
