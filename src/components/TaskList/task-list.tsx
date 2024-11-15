import { Task } from "../../App";
import { EmptyTasks } from "../EmptyTasks/empty-tasks";
import { TaskCard } from "../TaskCard/task-card";
import { BodyContainer, TaskContainer } from "./TaskList.styled";

interface TaskListProps {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskList = ({ tasks, setTasks  }: TaskListProps) => {
  const tasksLength = tasks.length;
  const completedTasksLength = tasks.filter((task) => task.isDone).length;

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks); 
  };

  const handleToggleTaskDone = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }


  return (
    <BodyContainer>
      <TaskContainer>
        <p>
          Tarefas Criadas <span>{tasksLength}</span>
        </p>
        <p>
          Concluídas <span>{completedTasksLength} de {tasksLength}</span>
        </p>
      </TaskContainer>
      {tasksLength > 0 ? (
        tasks.map((task) => {
          return <TaskCard task={task} onToggleDone={handleToggleTaskDone} onDeleteTask={handleDeleteTask}/>;
        })
      ) : (
        <EmptyTasks />
      )}
    </BodyContainer>
  );
};
