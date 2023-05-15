import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { getTodo } from "../API/api";

function TodoList() {
    // const [todoList, setTodoList] = useState([]);

    //     useEffect(()=> {
    //     const setInitial =  async () => {
    //         const token = localStorage.getItem('token');
    //         const data = await getTodo(token);
    //         data.map((todo) => {
    //           setTodoList((prev) => [...prev, {text: todo.todo, completed: todo.isCompleted, id: todo.id}]);
    //          })
    //     };
    //     if(!todoList.length){
    //         setInitial();
    //     }
    // },[]);

    return (
        <div>
            {/* {todoList?.map((list) => (
                <TodoItem key={list.id} list={list}/>
            ))} */}
        </div>
    )

}

export default TodoList;