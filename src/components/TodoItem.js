import deleteTask from "./deleteTask.js";

import { useState } from "react";
import UpdateTaskform from "./UpdateTaskform.js";
const TodoItem = ({task,taskData,settaskData,taskArray,settaskArray})=>{

     
     const [updateflag, setupdateFlag] = useState(0);
     function handleChange(e)
     {
        setupdateFlag(!updateflag);
        settaskData(task);
     }

    return(
        <div>
           <ul>
                <li key = {task.id}>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                    <button onClick={handleChange} >Edit</button>
                    <button onClick={()=>deleteTask (task,taskData,settaskData,taskArray,settaskArray)}>Delete</button>
                </li>
                </ul>
                {updateflag && <UpdateTaskform  task = {task} taskData = {taskData} settaskData = {settaskData} taskArray = {taskArray} settaskArray = {settaskArray}/>}
            
        </div>
    )
}
export default TodoItem;