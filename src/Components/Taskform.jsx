import { useState } from "react"

export default function Taskform({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(task.trim() === "") return;

        
        addTask({task: task, priority, category, completed: false});

        //reset
        setTask('');
        setPriority('medium');
        setCategory('general');
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Enter the task" 
                onChange={(e) => setTask(e.target.value)} value={task}/>
                <button type="submit">Add task</button>
            
                <select onChange={(e) => setPriority(e.target.value)} value={priority}> 
                    <option value="" disabled hidden>Priority</option>
                    <option value="high">high</option>
                    <option value="medium">medium</option>
                    <option value="low">low</option>
                </select>

                <select onChange={(e) => setCategory(e.target.value)} value={category}> 
                    <option value="" disabled hidden>Category</option>
                    <option value="general">general</option>
                    <option value="work">work</option>
                    <option value="personal">personal</option>
                </select>
            </div>
        </form>
    )
}