import { Header } from "./components/Header/header";
import { InputBar } from "./components/input-bar";
import { TaskList } from "./components/task-list";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <InputBar />
      <TaskList />
    </div>
  );
}

export default App;
