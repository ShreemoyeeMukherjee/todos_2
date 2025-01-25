const deleteTask = (task,taskData,settaskData,taskArray,settaskArray)=>
{
  let copyarray = [...taskArray];
  let i = 0;
  for(i= 0;i<copyarray.length;i++)
  {
        if(copyarray[i].id === task.id)
        {
            console.log(i);
            copyarray.splice(i,1);
            break;
        }

  }
  console.log(copyarray);
  settaskArray(copyarray);

}
export default deleteTask;