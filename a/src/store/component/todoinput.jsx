import { useState } from "react";
import {useDispatch} from 'react-redux'
import { AddTodo } from "../todoslice";
function Todoinput(){
    const [task,settask]=useState('')
    const dispatch=useDispatch()

    const hndleadd=()=>{
    if(task.trim()=='')
        return
        dispatch(AddTodo(task))
        settask('')

    }
    return(
        <div>
            <input type="text"
            name="text"
            value={task}
            onChange={(e)=>settask(e.target.value)}
            placeholder="enter task" />
            <button onClick={hndleadd}>addtodo</button>
        </div>
    )
}
export default Todoinput