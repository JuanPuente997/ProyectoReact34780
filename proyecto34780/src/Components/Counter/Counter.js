import '../Counter/Counter.css'
import {useState} from 'react'

const Counter = ({Name, Description, Price}) =>{

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
   <div className='BoxCounter'>
    <h3>{Name}</h3>
    <h5>{Description}</h5>
    <p>{Price}</p>
    <h2>{count}</h2>
    <button onClick={restar}>-</button>
    <button onClick={sumar}>+</button>
   </div>
)
}

export default Counter