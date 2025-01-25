 // first we will create a todo form
 console.log("hello3");

 function TodoForm({taskData,handleChange, handleSubmit})
 {
      return(
         <div>
            <form onSubmit = {handleSubmit}>
               <input type  = "text"  name = "id" id = "taskid" onChange= {handleChange} placeholder = "id"/>
               <input type  = "text"  name = "name" id = "taskname" onChange= {handleChange} placeholder = "name"/>
                             
               <input type = "text"    name = "description" id = "taskdescription" onChange = {handleChange} placeholder = "description"/>
               <input type = "submit" value = "Submit" />




            </form>
         </div>
      )
 }
 export default TodoForm;