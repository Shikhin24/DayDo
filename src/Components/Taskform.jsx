export default function Taskform() {
    return(
        <form>
            <div>
                <input type="text" placeholder="Enter the task" />
                <button type="submit">Add task</button>
            </div>

            <div>
                <select>
                    <option value="high">high</option>
                    <option value="medium">medium</option>
                    <option value="low">low</option>
                </select>

                <select>
                    <option value="general">general</option>
                    <option value="work">work</option>
                    <option value="personal">personal</option>
                </select>
            </div>
        </form>
    )
}