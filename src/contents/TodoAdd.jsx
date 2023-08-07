import { useState } from "react";
import { createTodo } from "../API/api";
import { Button, Input } from "../styled-components/SignIn-styled";

function TodoAdd({setList}) {
    const [todo, setTodo] = useState("");
    
    const clickAdd = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (todo.trim()) {
            setTodo("");
            await createTodo(todo, token);
            setList();
        }
    };
    
    return(
        <div>
            <Input
            data-testid="new-todo-input" 
            type="text" 
            placeholder="할 일" 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)}
            />
            <Button 
            onClick={(e)=> clickAdd(e)} 
            data-testid="new-todo-input"
            >
            추가
            </Button>
        </div>
    );
}

export default TodoAdd;