import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  border: 1px solid var(--gray-400);
  width: 46rem;
  height: 4.5rem;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.75rem;
  padding: 1rem;

  background-color: var(--gray-500);
  border-radius: 8px;
`;

export const TaskLabel = styled.label<{ isChecked: boolean }>`
  font-size: 0.875rem;
  color: ${({ isChecked }) =>
    isChecked ? "var(--gray-300)" : "var(--gray-100)"};
  width: 39.5rem;
  height: 2.5rem;
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
`;

export const ImageContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--gray-300);

  &:hover {
    background-color: var(--gray-400);
    border-radius: 4px;
    color: var(--danger);
  }

  svg {
  }
`;
