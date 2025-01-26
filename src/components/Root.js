import { useEffect,createContext,useState } from "react";
import Register from './Register.js'
const initialUser=  {

    'id':0,
    'name':'a1',
    'email':'a1@gmail.com',
    'password':'a1'
}
// const initial_user_task_array = [{
//     'user':initialUser.id,
//     'tasks':[],
// }]
const UserContext = createContext();

const Root = ()=>{
    
    const [currentUser,setcurrentUser] =  useState(initialUser);
    const [userArray,setuserArray] = useState([]);
    const [loggedin_user,setloggedin_user] = useState({});
    const [usertaskarray,setusertaskarray] = useState([])
    
    
    return(
        <div>
            <UserContext.Provider value = {{currentUser,setcurrentUser,userArray,setuserArray,loggedin_user,setloggedin_user,usertaskarray,setusertaskarray}} >
               <Register/>  
            </UserContext.Provider>
        </div>
    )



}
export {Root , UserContext}