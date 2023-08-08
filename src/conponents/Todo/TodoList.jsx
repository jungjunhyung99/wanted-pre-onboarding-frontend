    import { useEffect, useState } from "react";
    import TodoAdd from "./TodoAdd";
    import { getTodo } from "../../API/api";
    import TodoItem from "./TodoItem";

    function TodoList() {
        const [todoList, setTodoList] = useState([]);

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
            <div>
                <TodoAdd setList={setList}/>
                {todoList ?
                todoList?.map((todo,index) => (
                    <div key={index}>
                        <TodoItem 
                        todo={todo}
                        setList={setList}
                        />
                    </div>
                ))
                : 
                null
                }
            </div>
        )
    }

    export default TodoList;