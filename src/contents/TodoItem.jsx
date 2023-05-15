function TodoItem({list}) {
    const clickAdd = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        // if (todo.trim()) {
        //     setTodoList([...todoList, { text: todo, completed: false}]);
        //     setTodo("");
        //     createTodo(todo, token);
        // }
    };
    
    return(
        <div>
            {/* <Input
            data-testid="new-todo-input" type="text" placeholder="할 일" value={list.todo} onChange={(e)=>setTodo(e.target.value)}/>
            <Button onClick={(e)=> clickAdd(e)} data-testid="new-todo-input">추가</Button> */}
        </div>
    )
}

export default TodoItem;