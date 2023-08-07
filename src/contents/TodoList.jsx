    import { useEffect, useState } from "react";
    import TodoAdd from "./TodoAdd";
    import { getTodo } from "../API/api";
    import TodoResult from "./TodoResult";
    import EditTodo from "./EditTodo";

    function TodoList() {
        const [todoList, setTodoList] = useState([]);
        const [editIndex, setEditIndex] = useState(-1);

        const setList = async () => {
            const token = localStorage.getItem('token');
            const data = await getTodo(token);
            setTodoList([...data]);
            console.log(data);
        };

        useEffect(()=> {
            setList();
        },[]);

        return (
            <div style={{display:"flex", flexDirection:"column"}}>
                <TodoAdd list={todoList} setList={setList}/>
                {todoList ?
                todoList?.map((todo,index) => (
                    <div key={index}>
                    {index === editIndex ?
                        <EditTodo 
                        todo={todo}
                        setEditIndex={setEditIndex}
                        index={index}
                        setList={setList}
                        /> 
                        :
                        <TodoResult
                        todo={todo}
                        index={index}
                        setEditIndex={setEditIndex}
                        setList={setList}
                        />
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