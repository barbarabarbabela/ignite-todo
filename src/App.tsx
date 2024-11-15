import { useState } from "react";
import { Header } from "./components/Header/header";
import { InputContainer } from "./components/InputContainer/input-container";
import { TaskList } from "./components/TaskList/task-list";
import "./global.css";

export interface Task {
  id: number;
  title: string;
  isDone: boolean;
}


function App() {
  const [tasks, setTasks ] = useState<Task[]>(
    [
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
    ]
  )

  const handleAddTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <Header />
      <InputContainer tasks={tasks} onAddTask={handleAddTask} />
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
