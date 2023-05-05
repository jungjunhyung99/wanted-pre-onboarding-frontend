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
    });
    console.log(response);
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
    });
    console.log(response);
    return (response.status === 200 ? response : false); 
  } catch (error) {
    console.error(error);
  }
};