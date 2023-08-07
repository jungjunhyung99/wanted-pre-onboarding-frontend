import { useState } from "react";
import { Button, Input } from "../styled-components/SignIn-styled";
import { Li, TodoLabel } from "../styled-components/Todo-styled";
import { updateTodo } from "../API/api";

function EditTodo({todo, setEditIndex, index, setList}) {
    const [editTodo, setEditTodo] = useState({
        id: todo.todo,
        todo: todo.todo,
        isCompleted: todo.isCompleted
    });

    const submitEditClick = async () => {
        const token = localStorage.getItem('token');
        await updateTodo(editTodo, token);
        setList();
        setEditIndex(-1);
    };

    const checkBoxClick = async () => {
        const token = localStorage.getItem('token');
        await updateTodo({...todo, isCompleted: !todo.isCompleted}, token);
        setList();
    }

    return(
        <Li>
            <TodoLabel>
                <input type="checkbox" checked={todo.isCompleted} onChange={checkBoxClick}/>
                 <Input
                 data-testid="modify-input"
                 type="text"
                 placeholder="할 일"
                 value={editTodo.todo}
                 onChange={(e)=>setEditTodo({...editTodo, todo: e.target.value})}
                />
            </TodoLabel>
            <div>
                    <Button onClick={() => submitEditClick(index)} data-testid="submit-button">제출</Button>
                    <Button onClick={() => setEditIndex(-1)} data-testid="cancel-button">취소</Button>
            </div>
        </Li>
    )
}

export default EditTodo;