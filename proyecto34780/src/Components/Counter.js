import {useState} from 'react'
const Counter = () =>{

    const[count, setCount]= useState(0)

    const restar = () =>{
        if(count>0){
            setCount(count-1)
        }
    }
    const sumar = ()=>{
        setCount(count+1)
    }




    return(
   <div>
    <h1>Contador</h1>
    <h2>{count}</h2>
    <button onClick={restar}>Restar</button>
    <button onClick={sumar}>Sumar</button>
   </div>
)
}

export default Counter