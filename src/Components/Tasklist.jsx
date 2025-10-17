export default function Tasklist({tasks, updateTask, deleteTask}) {

  const toggleComplete = (index) => {
    const updatedTask = {...tasks[index], completed: !tasks[index].completed};
    updateTask(updatedTask, index);
  }
  return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div>
              <span> {task.text} 
                <small> ({task.priority}, {task.category}) </small>
              </span>
            
              <button onClick={() => toggleComplete(index)}>{task.completed ? "undo" : "complete"}</button>
              <button onClick={() => deleteTask(index)}>delete</button>
            </div>
          </li>
        ))}
      </ul>
  )
}



