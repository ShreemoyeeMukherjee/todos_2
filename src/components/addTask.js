

const addTask = (taskArray,settaskArray, taskData,settaskData)=>{
    console.log(taskArray);
    console.log(taskData);
    settaskArray((prevState)=>[
            ...prevState,
            taskData,
    ])
    settaskData({});
   
       

}
export default addTask;