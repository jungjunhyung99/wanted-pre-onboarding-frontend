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
        </TodoContainer>
    )
}
export default Todo;