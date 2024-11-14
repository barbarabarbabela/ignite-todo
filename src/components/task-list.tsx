import styled from "styled-components";
import { NoTasks } from "./no-tasks";
import { TaskCard } from "./task.card";

export interface Task {
  id: number;
  title: string;
  isDone: boolean;
}

export const TaskList = () => {
  const TaskContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    gap: 30.375rem;
    justify-content: center;
    font-weight: 700;
    font-size: 0.875rem;

    p:first-child {
      color: var(--blue);
    }

    p:last-child {
      color: var(--purple);
    }

    span {
      background-color: var(--gray-400);
      width: 25px;
      height: 19px;
      border-radius: 99%;
      padding: 0.125rem 0.5rem;
      font-size: 0.75rem;
      color: var(--gray-200);
    }
  `;

  const BodyContainer = styled.div`
    width: 46rem;
    margin: 0 auto;
  `;

  const tasks: Task[] = [
    {
      id: 1,
      title:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: false,
    },
    {
      id: 2,
      title: "Aliquam erat volutpat. Sed euismod mauris ut",
      isDone: false,
    },
  ];

  const tasksLength = tasks.length;

  return (
    <BodyContainer>
      <TaskContainer>
        <p>
          Tarefas Criadas <span>{tasksLength}</span>
        </p>
        <p>
          Concluídas <span>{tasksLength}</span>
        </p>
      </TaskContainer>
      {tasksLength > 0 ? (
        tasks.map((task) => {
          return <TaskCard tasks={task} />;
        })
      ) : (
        <NoTasks />
      )}
    </BodyContainer>
  );
};
