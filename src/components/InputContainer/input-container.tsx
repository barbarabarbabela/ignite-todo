import { Input } from "../Input/input";
import { Button } from "../Button/button";
import { FormContainer } from "./InputContainer.styled";
import { Task } from "../../App";
import { ChangeEvent, FormEvent, useState } from "react";

interface InputContainerProps {
  tasks: Task[]
  onAddTask: (newTask: Task) => void
}


export const InputContainer = ({ tasks, onAddTask }: InputContainerProps) => {
  const [inputData, setInputData] = useState("")


  const addNewTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const taskToAdd: Task = {
      id: tasks.length + 1,
      title: inputData,
      isDone: false
    }

    onAddTask(taskToAdd)
    setInputData("")
  }


  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value)
  }

  return (
    <FormContainer onSubmit={addNewTask}>
      <Input
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        value={inputData}
      />
      <Button type="submit" />
    </FormContainer>
  );
};
