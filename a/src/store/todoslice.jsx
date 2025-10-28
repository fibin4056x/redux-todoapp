import { createSlice } from "@reduxjs/toolkit";

const initial ={
    todo:[]
}
const todoSlice=createSlice({
    name:"todos",
    initialState:initial,
    reducers:{
        AddTodo:(state,action)=>{
            state.todo.push({id:Date.now(),text:action.payload})
        },
        deleteTODO:(state,action)=>{
            state.todo= state.todo.filter((t)=> t.id !==action.payload)
        }
    }
})
export const {AddTodo, deleteTODO } = todoSlice.actions
export default todoSlice.reducer