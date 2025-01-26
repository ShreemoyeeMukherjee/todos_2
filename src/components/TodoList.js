import TodoItem from "./TodoItem";
const TodoList = ({taskData,settaskData,taskArray,settaskArray,current_user_task_array})=>{
   
    return(
        <div>
        {current_user_task_array.map((task) =>(
            <TodoItem task = {task} taskData={taskData} settaskData={settaskData} taskArray={taskArray} settaskArray={settaskArray}/>
        )
            
        )}
        </div>
    )

}
export default TodoList;