import { useState } from "react";
import { Button, Input } from "../../styled-components/SignIn-styled";
import { Li, TodoLabel } from "../../styled-components/Todo-styled";
import { deleteTodo, updateTodo } from "../../API/api";

function TodoItem({todo, setList}) {
    const [isEdit, setIsEdit] = useState(false);
    const [inputText, setInputText] = useState(todo.todo);
    const onDeleteClick = async (id) => {
        const token = localStorage.getItem('token');
        await deleteTodo(id, token);
        setList();
    };

    const onSubmitClick = async () => {
        const newTodo = { ...todo, todo: inputText };
        const token = localStorage.getItem('token');
        await updateTodo(newTodo, token);
        setIsEdit(false);
        setList();
    };

    const onCheckBoxClick = async () => {
        const newTodo = { ...todo, isCompleted: !todo.isCompleted };
        const token = localStorage.getItem('token');
        await updateTodo(newTodo, token);
        setList();
        onCancleClick();
      };

    const onCancleClick = () => {
        setInputText(todo.todo);
        setIsEdit(false);
    };

    return(
        <Li>
            {isEdit ? 
            <>
                <TodoLabel>
                    <input type="checkbox" checked={todo.isCompleted} onChange={onCheckBoxClick}/>
                    <Input
                    data-testid="modify-input"
                    type="text"
                    placeholder="할 일"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    />
                </TodoLabel>
                <div>
                        <Button onClick={onSubmitClick} data-testid="submit-button">제출</Button>
                        <Button onClick={onCancleClick} data-testid="cancel-button">취소</Button>
                </div>
            </>
            :
            <>
            <input type="checkbox" checked={todo.isCompleted} onChange={onCheckBoxClick}/>
                {todo.todo}
            <div>
                <Button 
                onClick={() => setIsEdit(true)} 
                data-testid="modify-button">
                    수정
                </Button>
                
                <Button 
                onClick={() => onDeleteClick(todo.id)} 
                data-testid="delete-button">
                    삭제
                </Button>
            </div>
            </>
            }
        </Li>
    )
}

export default TodoItem;