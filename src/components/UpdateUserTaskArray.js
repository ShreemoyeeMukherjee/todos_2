

const UpdateUserTaskArray = (loggedin_user,setloggedin_user,usertaskarray,setusertaskarray,taskArray)=>{
    const required_id = loggedin_user.id;
    
    const user_not_new = usertaskarray.filter((usertask_obj)=>{
                    console.log("usertaskobj",usertask_obj);
                  return(usertask_obj?.user === required_id)
    })
    console.log("Found user",user_not_new);
    const mergeTasks = (user_task_obj)=>{
        if( user_task_obj?.user === required_id)
        {
               const updatedUser_task = {
                ...user_task_obj,
                'task':[...user_task_obj.task,...taskArray]
               }
               return(updatedUser_task)
        }
        else
        {
            return(user_task_obj);
        }
    }
    
    if(user_not_new.length === 0)
    {
        const newusertask = {
            'user':required_id,
            'task':taskArray,
        }
        setusertaskarray((prevState)=>[
            ...prevState,
            newusertask
        ])
    }
    else{
          setusertaskarray((prevState)=>{
            return prevState.map(mergeTasks);
           
          })
    }

}
export  default UpdateUserTaskArray;