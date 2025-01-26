import {useState, useEffect,useContext} from "react";
import { UserContext } from "./Root.js";
import Login from "./Login.js"



const Register = ()=>{
    const context = useContext(UserContext);
    //console.log(context)
    const {currentUser,setcurrentUser,userArray,setuserArray} = context||{}
    function onChange(e)
    {
         setcurrentUser((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value,
         }))
    }
    function onSubmit(e)
    {
        e.preventDefault();
        setuserArray((prevState)=>[
            ...prevState,
            currentUser,
        ])
       
    }
    useEffect(()=>{
        try
        {
            if(currentUser.id === ''|| currentUser.name === ''|| currentUser.email ==='' || currentUser.password === '')
            {
                throw new Error("All fields are required")
            }

        }
        catch(e)
        {
            alert(e.message);
        }


    },[currentUser])
    useEffect(()=>{
         if(userArray.length !== 0){
          console.log("cuurentuser after updation",userArray)
         }
    },[userArray])
    return(
        
        <div>
             <form onSubmit={onSubmit}>
            <input type = "text" name = "name" id = "uname"  placeholder= "name" onChange = {onChange}/>
            <input type = "email" name = "email"id = "uemail" placeholder = "email"   onChange = {onChange}/>
            <input type = "password" name = "password"id = "upassword"  placeholder= "password"    onChange = {onChange}/>
            <input type = "number" name = "id"id = "uid" placeholder="id" onChange = {onChange}/>
            <button type = "submit">Submit</button>
            </form>
            <Login/>
         
        </div>
       
    )



    
}
export  default Register;