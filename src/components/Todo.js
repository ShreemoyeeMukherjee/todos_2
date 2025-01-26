import { useState ,useEffect, useContext } from "react";

import TodoForm from './TodoForm.js'
import addTask from "./addTask.js";

import TodoList from "./TodoList.js";
import { UserContext } from "./Root.js";
import UpdateUserTaskArray from "./UpdateUserTaskArray.js";
let current_user_task_array = []



function Todo()
{
   const {loggedin_user,setloggedin_user,usertaskarray,setusertaskarray} = useContext(UserContext);
   
     const[taskData, settaskData] = useState({});
     const[taskArray,settaskArray] = useState([]);
    
     

        function handleSubmit(e)
        {
            e.preventDefault();
            console.log("submit");
            console.log(taskData);
           
            console.log(typeof(settaskArray));
            
       
            addTask(taskArray,settaskArray, taskData,settaskData);

      
       
            

        }
        useEffect(() => {
         
         if(taskArray.length != 0){
            console.log(taskArray);
         UpdateUserTaskArray(loggedin_user,setloggedin_user,usertaskarray,setusertaskarray,taskArray)
         //  current_user_task_array = usertaskarray.filter((user_task_obj)=>{
         //    return(user_task_obj.user === loggedin_user.id)
        
         settaskArray([]);
}

          
         

         
     },[taskArray]);

     useEffect(()=>{
      if(usertaskarray.length != 0)
      {
         console.log("Usertaskarray after updation",usertaskarray)
      }
     },[usertaskarray])

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
            <TodoList  taskData={taskData} settaskData={settaskData} taskArray={taskArray} settaskArray={settaskArray} current_user_task_array= {current_user_task_array}/>
         

        </div>
     )

    
     
}
export default Todo;