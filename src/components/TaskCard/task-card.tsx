import { Trash } from "phosphor-react";
import { RadioGroup } from "../RadioGroup/radio-group";
import { CardContainer, ImageContainer, TaskLabel } from "./TaskCard.styled";
import { Task } from "../../App";
import { useState } from "react";

interface TaskCardProps {
  task: Task;
  onDeleteTask: (id: number) => void;
  onToggleDone: (id: number) => void;
}

export const TaskCard = ({ task, onDeleteTask, onToggleDone }: TaskCardProps) => {
  const [isRadioChecked, setIsRadioChecked] = useState(task.isDone);

  const handleRadioChange = () => {
    setIsRadioChecked((prevState) => !prevState);

    onToggleDone(task.id);

  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id)
  }

  return (
    <CardContainer>
      <RadioGroup checked={isRadioChecked} onToggle={handleRadioChange}/>
      <TaskLabel isChecked={isRadioChecked}>{task?.title}</TaskLabel>
      <ImageContainer>
        <Trash onClick={handleDeleteTask}/>
      </ImageContainer>
    </CardContainer>
  );
};
