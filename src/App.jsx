import Taskform from "./Components/Taskform"
import Tasklist from "./Components/Tasklist"
import Progresstracker from "./Components/Progresstracker"
import { useEffect, useState } from "react"
import "./Style.css"

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState("light");
  
  // Load tasks and theme from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const savedTheme = localStorage.getItem("theme") || "light";
    setTasks(savedTasks);
    setTheme(savedTheme);
  }, []);

  // Save tasks and theme when changed
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("dark-mode", theme === "dark");
  }, [tasks, theme]);

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

  const toggleTheme = () => {
  setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };


  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>DayDo</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </header>
      <p>To-Do list</p>

      <Taskform addTask={addTask}/>
      <Tasklist tasks={tasks} updateTask={updateTask} deleteTask = {deleteTask} />
      <Progresstracker tasks={tasks}/>

      <button className="clear-btn" onClick={clearTasks}>Clear</button>
    </div>
  )
}