import { useEffect,createContext,useState } from "react";
import Register from './Register.js'
const initialUser=  {

    'id':0,
    'name':'a1',
    'email':'a1@gmail.com',
    'password':'a1'
}
const UserContext = createContext();
console.log(UserContext);
console.log("hi")
const Root = ()=>{
    console.log("in root");
    const [currentUser,setcurrentUser] =  useState(initialUser);
    const [userArray,setuserArray] = useState([]);
    const [loggedin_user,setloggedin_user] = useState({});
    console.log(currentUser,userArray,loggedin_user);
    
    return(
        <div>
            <UserContext.Provider value = {{currentUser,setcurrentUser,userArray,setuserArray,loggedin_user,setloggedin_user}} >
               <Register/>  
            </UserContext.Provider>
        </div>
    )



}
export {Root , UserContext}