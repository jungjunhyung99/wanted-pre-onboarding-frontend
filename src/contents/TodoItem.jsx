import { useState } from "react";
import { Button, Input } from "../styled-components/SignIn-styled";
import { Li, TodoLabel, TodoSpan } from "../styled-components/Todo-styled";
import { updateTodo } from "../API/api";
import TodoList from "./TodoList";

function TodoItem({setEditIndex, index, setList, todoList, editIndex}) {
    const [editTodo, setEditTodo] = useState(todoList[index].todo);

    const submitEditClick = async (index) => {
        const token = localStorage.getItem('token');
        await updateTodo(todoList[editIndex].id,token,editTodo,todoList[editIndex].isCompleted);
        setList();
        setEditIndex(-1);
        setEditTodo("");
    };

    const checkBoxClick = () => {

    }

    return(
        <Li>
            <TodoLabel>
                <input type="checkbox"/>
                 <Input
                 data-testid="modify-input"
                 type="text"
                 placeholder="할 일"
                 value={editTodo}
                 onChange={(e)=>setEditTodo(e.target.value)}
                />
            </TodoLabel>
            <div>
                    <Button onClick={() => submitEditClick(index)} data-testid="submit-button">제출</Button>
                    <Button onClick={() => setEditIndex(-1)} data-testid="cancel-button">취소</Button>
            </div>
        </Li>
    )
}

export default TodoItem;