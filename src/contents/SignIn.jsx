import { useEffect, useState } from "react";
import { Button, Form, Input, SignInContainer } from "../styled-components/SignIn-styled";
import { useNavigate } from "react-router-dom";
import { signinFunc } from "../API/api";
import { CheckToken, UseValid } from "../hook/hook";

function SignIn() {
    const navigate = useNavigate();
    const [valid,setValid] = useState(true);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    
    const onClick = () => {
        UseValid({...form, setValid});
    }

    const onSubmit = (e) => {
        e.preventDefault();
            signinFunc(form.email, form.password).then((result) => {
                if(result){
                    console.log("hi");
                    localStorage.setItem('token', result.access_token);
                    navigate("/todo");
                }
            })            
    }

    useEffect(() => {
        if(CheckToken()){
            navigate("/todo");
        }
    },[navigate]);
    
    return(
        <SignInContainer>
            <Form onSubmit={onSubmit}>
                <Input type="text" placeholder="이메일" value={form.email} data-testid="email-input" onChange={(e) => setForm({...form, email: e.target.value})}/>
                <Input type="text" placeholder="비밀번호" value={form.password} data-testid="email-input" onChange={(e) => setForm({...form, password: e.target.value})}/>
                {valid ? <Button onClick={onClick} data-testid="signup-button">로그인</Button> : <Button disabled>클릭2</Button>}
            </Form>
        </SignInContainer>
    )
}

export default SignIn;
