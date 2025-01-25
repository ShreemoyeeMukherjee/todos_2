import TodoItem from "./TodoItem";
const TodoList = ({taskData,settaskData,taskArray,settaskArray})=>{
   
    return(
        <div>
        {taskArray.map((task) =>(
            <TodoItem task = {task} taskData={taskData} settaskData={settaskData} taskArray={taskArray} settaskArray={settaskArray}/>
        )
            
        )}
        </div>
    )

}
export default TodoList;