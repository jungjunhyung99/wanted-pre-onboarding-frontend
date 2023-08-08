export const checkValid = (data, setValid) => {
    console.log(data.email);
    if (!data.email.includes("@") || data.password.length < 8) {
        setValid(false);
    } else {
        setValid(true);
    }
}


export const CheckToken = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if(token) return true;
    else return false;
}