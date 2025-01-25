import { onChange,onSubmit } from "./updateTask.js";

const  UpdateTaskform = ({task,taskData,settaskData,taskArray,settaskArray})=>{
   
    

    function onChange(e)
{
    
    settaskData((prevState)=>({
        ...prevState,
         [e.target.name]:e.target.value,

      }))
      
      
      

}
function onSubmit(e)
    {
        console.log("after task updation",taskData);
        e.preventDefault();
        console.log("before updation of array")
        let j = 0;
        for(j = 0;j<taskArray.length;j++)
            {
                      console.log(taskArray[j])
            }
            
        settaskArray((prevState)=>{
           return  prevState.map((task)=>{
               return (task.id === taskData.id) ? {...task,...taskData}:{task}
            })
        })
        console.log("Task updation");
        let i  = 0;
        for(i = 0;i<taskArray.length;i++)
        {
                  console.log(taskArray[i])
        }
        
    }
    



    return(<div>
        <form onSubmit = {onSubmit}>
               <input type  = "text"  name = "id" id = "taskid" onChange= {onChange} placeholder = "id"/>
               <input type  = "text"  name = "name" id = "taskname" onChange= {onChange} placeholder = "name"/>
                             
               <input type = "text"    name = "description" id = "taskdescription" onChange = {onChange} placeholder = "description"/>
               <input type = "submit" value = "Submit" />




            </form>
    </div>
        
    )
    
}
export default UpdateTaskform;