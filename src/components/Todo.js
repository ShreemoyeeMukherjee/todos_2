import { useState ,useEffect } from "react";
// console.log(
//    "hi"
// );
import TodoForm from './TodoForm.js'
import addTask from "./addTask.js";

import TodoList from "./TodoList.js";
function Todo()
{
     const[taskData, settaskData] = useState({});
     const[taskArray,settaskArray] = useState([]);

        function handleSubmit(e)
        {
            e.preventDefault();
            console.log("submit");
            console.log(taskData);
           
            console.log(typeof(settaskArray));
            
       
            addTask(taskArray,settaskArray, taskData,settaskData);
      
       console.log(taskArray);
            

        }
        useEffect(() => {
         console.log("Updated Task Data" ,taskData);
         console.log("Updated taskArray:", taskArray);
     }, [taskArray,taskData]);

     useEffect(()=>{
         try{
            if(taskData.id === '' || taskData.name === ''|| taskData.description  === '')
            {
               throw new Error("All the fields should be filled")
            }
         }
          catch(e)
          {
            console.log(e.message);
              alert(e.message);
          }
     },[taskData])
         
        function handleChange(e)
        {
         const {name, value} = e.target;
                 settaskData((prevState)=>({
                    ...prevState,
                    [name]:value
                 }))
        }
     return(
        <div>
            <TodoForm taskData = {taskData}  handleChange = {handleChange} handleSubmit = {handleSubmit}/>
            <TodoList  taskData={taskData} settaskData={settaskData} taskArray={taskArray} settaskArray={settaskArray}/>
         

        </div>
     )

    
     
}
export default Todo;