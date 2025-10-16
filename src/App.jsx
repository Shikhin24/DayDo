import Taskform from "./Components/Taskform"
import Tasklist from "./Components/Tasklist"
import Progresstracker from "./Components/Progresstracker"
import { useEffect, useState } from "react"

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }
  return (
    <div>
      <h1>DayDo</h1>
      <p>Smart ToDo</p>
      <Taskform addTask={addTask}/>
      <Tasklist />
      <Progresstracker />
      <button>Clear</button>
    </div>
  )
}