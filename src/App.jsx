// // import Input from "./Input";
// import Event from "./Event.jsx"


// function App() {
//   return(
//   // <Input/>
//   <Event/>
//   );
// }
  
// export default App 


//click event= An interaction when a user clicks on a specfic element
//             we can respond to clicks by passing
//             a callback to the onclick event handler.



// import Button from './Button.jsx'
// function App(){
//   return(<Button/>)
// }
// export default App 
import React, { useState } from "react";
import LoginForm from './LoginForm.jsx'
import UserDshboard from './UserDashboard.jsx'
import AdminDashboard from './AdminDashboard.jsx'
import ErrorMessage from './ErrorMessage.jsx'
  
const App=()=>{
  const[isLoggedIn, setIsLoggedIn]=useState(false)
  const[isAdmin, setIsAdmin]=useState(false)
  const[showError,setShowError]=useState(false)


const handleLogin =(username ,password)=>{
  if(username==="admin"&&password==="admin"){
     

    setIsAdmin(true);
    setIsLoggedIn(true);
    setShowError(false)



  }
  else if(username==="user"&&password==="user"){
    setIsLoggedIn(true)
    setShowError(false)
  }
    

    else{
      setShowError(true)
    }
   

  }
  return(
    <div>

     {!isLoggedIn&&<LoginForm passToParenet={handleLogin}/>  }
     {isLoggedIn&& (!isAdmin)&&<UserDshboard/>}
     {showError && <ErrorMessage/>}
     {isLoggedIn && isAdmin && <AdminDashboard />}
     
     
  
   
    </div>
   
   
   
     );
  

}
 
  export default App;



