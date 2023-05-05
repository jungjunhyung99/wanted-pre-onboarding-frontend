export const UseValid = (props) => {
    if(!props.email.includes("@")){
        props.setValid(false);
        return;
    }
    if(props.password.length < 8){
        props.setValid(false);
    }
}

export const CheckToken = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if(token) return true;
    else return false;
}