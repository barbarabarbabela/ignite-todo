import image from "../../assets/image.svg";
import { Container } from "./EmptyTasks.styled";

export const EmptyTasks = () => {

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
