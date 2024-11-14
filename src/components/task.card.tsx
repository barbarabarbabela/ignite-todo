import { Trash } from "phosphor-react";
import { RadioGroup } from "./radio-group";
import styled from "styled-components";
import { Task } from "./task-list";

interface TaskCardProps {
  tasks: Task;
}

export const TaskCard = ({ tasks }: TaskCardProps) => {
  const CardContainer = styled.div`
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

    label {
      font-size: 0.875rem;
      color: var(--gray-100);
      width: 39.5rem;
      height: 2.5rem;
    }
  `;

  const ImageContainer = styled.div`
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

  return (
    <CardContainer>
      <RadioGroup />
      <label>{tasks.title}</label>
      <ImageContainer>
        <Trash />
      </ImageContainer>
    </CardContainer>
  );
};
