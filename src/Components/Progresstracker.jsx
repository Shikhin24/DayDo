
export default function Progresstracker({tasks}) {
  
  const completedTask = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : (completedTask/totalTasks)*100;

  return (
    <div className="progress-tracker">
      <p>
        {completedTask} of {totalTasks} tasks completed
      </p>
      <div className="progress-bar">
        <div className="progress" style={{width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
