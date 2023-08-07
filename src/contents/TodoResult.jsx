import { deleteTodo, updateTodo } from "../API/api";
import { Button } from "../styled-components/SignIn-styled";
import { Li } from "../styled-components/Todo-styled";

function TodoResult({todo, index,setEditIndex,setList}) {
    const deleteClick = async (id) => {
        const token = localStorage.getItem('token');
        await deleteTodo(id, token);
        setList();
    };

    const checkBoxClick = async () => {
        const token = localStorage.getItem('token');
        await updateTodo({...todo, isCompleted: !todo.isCompleted}, token);
        setList();
    }

    return(
        <Li>    
        <input type="checkbox" checked={todo.isCompleted} onChange={checkBoxClick}/>
        {todo.todo}
            <div>
                <Button 
                onClick={() => setEditIndex(index)} 
                data-testid="modify-button">
                    수정
                </Button>
                
                <Button 
                onClick={() => deleteClick(todo.id)} 
                data-testid="delete-button">
                    삭제
                </Button>
            </div>
        </Li>
    )
}

export default TodoResult;