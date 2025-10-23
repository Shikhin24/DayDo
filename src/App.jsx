import Taskform from "./Components/Taskform"
import Tasklist from "./Components/Tasklist"
import Progresstracker from "./Components/Progresstracker"
import { useEffect, useState } from "react"
import "./Style.css"

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
     localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks,task]);
  };

  const updateTask = (updatedTask, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  };

  const clearTasks = () => {
  setTasks([]);
  localStorage.removeItem("tasks");
  };


  return (
    <div>
      <h1>DayDo</h1>
      <p>Smart ToDo</p>
      <Taskform addTask={addTask}/>
      <Tasklist tasks={tasks} updateTask={updateTask} deleteTask = {deleteTask} />
      <Progresstracker tasks={tasks}/>
      <button onClick={clearTasks}>Clear</button>
    </div>
  )
}