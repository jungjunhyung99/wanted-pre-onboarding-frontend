const baseUrl = "https://www.pre-onboarding-selection-task.shop/";

export const signupFunc = async (email, password) => {
  try {
    const response = await fetch(`${baseUrl}auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        'email': `${email}`,
        'password': `${password}`
      }),
    })
    return (response.status === 201 ? true : false); 
  } catch (error) {
    console.error(error);
  }
};

export const signinFunc = async (email, password) => {
  try {
    const response = await fetch(`${baseUrl}auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        'email': `${email}`,
        'password': `${password}`
      }),
    }).then((result) => result.json());
    return (response.access_token ? response : false);
  } catch (error) {
    console.error(error);
  }
};

export const createTodo = async (todo,token) => {
  try {
    const response = await fetch(`${baseUrl}todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization : `Bearer ${token}`,
      },
      body: JSON.stringify({
        todo
      }),
    }).then((result) => result.json());
    console.log("create: ", response);
    return (response? response : false);
  } catch (error) {
    console.error(error);
  }
};

export const getTodo = async (token) => {
  try {
    const response = await fetch(`${baseUrl}todos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization : `Bearer ${token}`,
      },
    }).then((result) => result.json());
    return (response ? response : false);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async(id,token) => {
  try{
    const response = await fetch(`${baseUrl}todos/${id}`,{
      method: "DELETE",
      headers: {
        Authorization : `Bearer ${token}`
      }
    });
    console.log("delete: ", response);
    return response;
  } catch (error){
    console.error(error);
  }
};

export const updateTodo = async (todo, token) => {
  try{
    const response = await fetch(`${baseUrl}todos/${todo.id}`,{
      method: "PUT",
      headers: {
        Authorization : `Bearer ${token}`,
        "Content-Type": "application/json; charset=utf-8"
      }, 
      body: JSON.stringify({ todo: todo.todo, isCompleted: todo.isCompleted }),
    })
    console.log("update:", response);
  } catch (error){
    console.error(error);
  }
};