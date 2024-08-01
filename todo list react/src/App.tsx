import React, { useState } from "react";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };
  const deletebutton = (id: number) => {
    setTasks(tasks.filter((_, index) => index !== id));
  };
  return (
    <>
      <h1>TO DO LIST</h1>
      <TaskList tasks={tasks} deletebutton={deletebutton}></TaskList>
      <AddTask addTask={addTask}></AddTask>
    </>
  );
}

export default App;
