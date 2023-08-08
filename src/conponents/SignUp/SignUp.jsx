import { useEffect, useState } from "react";
import { Button, Form, Input, SignInContainer } from "../../styled-components/SignIn-styled";
import { signupFunc } from "../../API/api";
import { useNavigate } from "react-router-dom";
import { CheckToken, UseValid } from "../../hook/hook";
function SignUp() {
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
        const response = signupFunc(form.email, form.password);
        if(response){
            navigate("/signin");
        }
    }

    useEffect(() => {
        if(CheckToken()){
            navigate("/todo");
        }
    },[navigate]);
    
    return(
        <SignInContainer>
            회원가입
            <Form onSubmit={onSubmit}>
                <Input type="text" placeholder="이메일" value={form.email} data-testid="email-input" onChange={(e) => setForm({...form, email: e.target.value})}/>
                <Input type="text" placeholder="비밀번호" value={form.password} data-testid="email-input" onChange={(e) => setForm({...form, password: e.target.value})}/>
                {valid ? <Button onClick={onClick} data-testid="signup-button">회원가입</Button> : <Button disabled>회원가입</Button>}
            </Form>
        </SignInContainer>
    )
}

export default SignUp;
