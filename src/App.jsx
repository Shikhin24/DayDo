import Taskform from "./Components/Taskform"
import Tasklist from "./Components/Tasklist"
import Progresstracker from "./Components/Progresstracker"

export default function App() {
  return (
    <div>
      <h1>DayDo</h1>
      <p>Smart ToDo</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear All</button>
    </div>
  )
}