// function Button(){

//     const handleClick=()=>console.log("OUCH!");
//     const handleClick2=(name)=>console.log(`${name} stop clicking me`)
    
//   return(<button onClick={()=>handleClick2("Bro")}>Click me </button>)
// }
// export default Button
function Button(){
     let count=0;
    const handleClick=(name)=>{
       if(count<3){
        count++;
       console.log(`${name} you clicked me ${count} time/s`)
       }
       
       else{
         console.log( `${name} stop clicking me!!`);
       }


    };
   
    return(<button onClick={()=>handleClick("Bro")}>Click me </button>)


}
export default Button
