    import { useEffect, useState } from "react";
    import TodoAdd from "./TodoAdd";
    import { getTodo } from "../API/api";
    import TodoItem from "./TodoItem";
    import { Li } from "../styled-components/Todo-styled";
    import TodoResult from "./TodoResult";

    function TodoList() {
        const [todoList, setTodoList] = useState([]);
        const [editIndex, setEditIndex] = useState(-1);

        const setList =  async () => {
            const token = localStorage.getItem('token');
            const data = await getTodo(token);
            setTodoList([...data]);
        };

        useEffect(()=> {
            setList();
        },[]);
        
        return (
            <div style={{display:"flex", flexDirection:"column"}}>
                <TodoAdd list={todoList} setList={setList}/>
                {todoList ?
                todoList?.map((list,index) => (
                    <div key={index}>
                    {index === editIndex ?
                        <TodoItem setEditIndex={setEditIndex} index={index} setList={setList} todoList={todoList} editIndex={editIndex}/> 
                        :
                        <TodoResult list={list} index={index} setEditIndex={setEditIndex} setList={setList}/>
                    }
                    </div>
                ))
                : 
                null
                }
            </div>
        )
    }

    export default TodoList;