import { useEffect } from "react";
import { TodoContainer } from "../../styled-components/Todo-styled";
import TodoList from "./TodoList";
import { CheckToken } from "../../hook/hook";
import { useNavigate } from "react-router-dom";

function Todo() {
    const navigate = useNavigate();

    useEffect(() => {
        if(!CheckToken()){
            navigate("/");
        }
    },[navigate])
    
    return(
        <TodoContainer>
            <TodoList />
        </TodoContainer>
    )
}
export default Todo;