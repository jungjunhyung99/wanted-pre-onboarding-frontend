export const UseValid = (props) => {
    console.log(props);
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
    if(token) return true;
    else return false;
}