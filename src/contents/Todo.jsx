import { useEffect } from "react";
import { Li, TodoContainer, TodoLabel, TodoSpan } from "../styled-components/Todo-styled";
import { Button, Form, Input } from "../styled-components/SignIn-styled";
import { useState } from "react";
import { createTodo, getTodo } from "../API/api";
import TodoItem from "./TodoAdd";
import TodoList from "./TodoList";

function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState("");
    const [editIndex, setEditIndex] = useState(-1);
    const [editTodo, setEditTodo] = useState("");
    
    const clickAdd = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (todo.trim()) {
            setTodoList([...todoList, { text: todo, completed: false}]);
            setTodo("");
            createTodo(todo, token);
        }
    };

    const deleteClick = (index) => {
        const newList = [...todoList];
        newList.splice(index, 1);
        setTodoList(newList);
    };

    const editClick = (index) => {
        setEditIndex(index);
    };

    const submitEditClick = (index) => {
        const newList = [...todoList];
        newList[editIndex].text = editTodo;
        setTodoList(newList);
        setEditIndex(-1);
        setEditTodo("");
    };

    useEffect(()=> {
        const setInitial =  async () => {
            const token = localStorage.getItem('token');
            const data = await getTodo(token);
            data.map((todo) => {
              setTodoList((prev) => [...prev, {text: todo.todo, completed: todo.isCompleted, id: todo.id}]);
             })
        };
        if(!todoList.length){
            setInitial();
        }
    },[]);

    return(
        <TodoContainer>
            <TodoList />
            {/* {todoList.map((todo,index) => (
                <Li key={index}>
                <TodoLabel>
                    <input type="checkbox"/>
                    {editIndex === index ? 
                     <Input
                     data-testid="modify-input"
                     type="text"
                     placeholder="할 일"
                     value={editTodo}
                     onChange={(e)=>setEditTodo(e.target.value)}
                    />
                    : 
                    <TodoSpan>{todo.text}</TodoSpan>
                    }
                </TodoLabel>
                {editIndex === index ?
                <div>
                    <Button onClick={() => submitEditClick(index)} data-testid="submit-button">제출</Button>
                    <Button onClick={() => setEditIndex(-1)} data-testid="cancel-button">취소</Button>
                </div>
                :
                <div>
                    <Button onClick={() => editClick(index)} data-testid="modify-button">수정</Button>
                    <Button onClick={() => deleteClick(index)} data-testid="delete-button">삭제</Button>
                </div>
                }
                </Li>
            ))} */}
        </TodoContainer>
    )
}
export default Todo;