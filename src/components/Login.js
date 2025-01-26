import { UserContext } from "./Root.js"
import { useContext,useEffect,useState } from "react";

import Todo from "./Todo.js";
const Login = ()=>{
    const {loggedin_user,setloggedin_user,userArray} = useContext(UserContext);
   const [isLogin,setisLogin]  = useState(0);
      let user = {
        'email':'',
        'password':'',
      }
      function Find(registered_user)
      {
        console.log("registered user",registered_user);
        console.log("loginuser",user);
        return(registered_user.email === user.email && registered_user.password === user.password )
      }
      function onChange(e)
      {
        user[e.target.name] = e.target.value;
      }
      function onSubmit(e)
      {
        try{
        e.preventDefault();
        const requireduserarray = userArray.filter(Find)
        if(requireduserarray.length  === 0)
        {
            throw new Error("Either email or password is incorrect")
        }
        else
        {
            const user_to_be_logged_in =  requireduserarray[0];
            setloggedin_user(user_to_be_logged_in);
        }

    }
    catch(e)
    {
        alert(e.message);
    }

      }
      useEffect(()=>{
        if(JSON.stringify(loggedin_user) != '{}'){
         console.log("Logged in user",loggedin_user);
         if(isLogin == 0)
         setisLogin(!isLogin);
        }

      },[loggedin_user])


      return(
        <div>
            <form onSubmit={onSubmit}>
                 <input type = "email" id = "uemail" name = "email" placeholder = "email" onChange={onChange}/>
                 <input type = "password" id = "upassword" name = "password" placeholder="password" onChange={onChange}/>
                <button type = "submit">Submit</button>
            </form>
            {isLogin && <Todo/>}
            
        </div>
      )


}
export default Login;