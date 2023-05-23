import { deleteTodo } from "../API/api";
import { Button } from "../styled-components/SignIn-styled";
import { Li } from "../styled-components/Todo-styled";

function TodoResult({list, index,setEditIndex,setList}) {
    console.log(setList);
    const deleteClick = async (id) => {
        const token = localStorage.getItem('token');
        await deleteTodo(id, token);
        setList();
    };

    return(
        <Li>    
        <input type="checkbox"/>
        {list.todo}
            <div>
                <Button 
                onClick={() => setEditIndex(index)} 
                data-testid="modify-button">
                    수정
                </Button>
                
                <Button 
                onClick={() => deleteClick(list.id)} 
                data-testid="delete-button">
                    삭제
                </Button>
            </div>
        </Li>
    )
}

export default TodoResult;