import {  deleteTODO, } from "../todoslice";
import{ useSelector, useDispatch} from 'react-redux'

function Todolist(){
    const value= useSelector((state)=>state.todos.todo)
    const dispatch= useDispatch()

return(
    <div>
        
        {value.map((todo,index)=>(
            <li key={index}>{todo.text}
            <button onClick={()=>dispatch(deleteTODO(todo.id))}>dlt</button></li>
        ))}
    </div>
)
}
export default Todolist