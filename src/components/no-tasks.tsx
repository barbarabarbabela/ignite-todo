import styled from "styled-components";
import image from "../assets/image.svg";

export const NoTasks = () => {
  const Container = styled.div`
    color: var(--gray-300);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 46rem;
    margin: auto;
    gap: 1rem;

    padding: 4rem 1.5rem;
    border-top: 1px solid var(--gray-400);

    span {
      font-weight: 700;
    }
  `;

  return (
    <Container>
      <img src={image} />

      <div>
        <span>Você ainda não tem tarefas cadastradas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </Container>
  );
};
