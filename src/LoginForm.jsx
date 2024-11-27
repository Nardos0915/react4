import React,{useState}from "react";


function LoginForm({passToParenet}){
 
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();
   passToParenet(username,password);
  }
 
  return(
    <>
        <form onSubmit={handleSubmit} >
    
        <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
          </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
            <button type="submit">Submit</button> 
      </div>
    
    
    
        </form>    
         
         
    </>
    
  );  

  

}



    

export default LoginForm;