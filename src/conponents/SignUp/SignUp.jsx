import { useEffect, useState } from "react";
import { Button, ButtonDiv, Form, Input, SignInContainer } from "../../styled-components/SignIn-styled";
import { signupFunc } from "../../API/api";
import { useNavigate } from "react-router-dom";
import { CheckToken, checkValid } from "../../hook/hook";
function SignUp() {
    const navigate = useNavigate();
    const [valid,setValid] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const onChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
        checkValid({...form, [name]: value},setValid);
    };

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
                <Input type="text" name="email" placeholder="이메일" value={form.email} data-testid="email-input" onChange={onChange}/>
                <Input type="text" name="password" placeholder="비밀번호" value={form.password} data-testid="password-input" onChange={onChange}/>
                <ButtonDiv>
                    {valid ? <Button data-testid="signup-button">회원가입</Button> : <Button disabled>회원가입</Button>}
                    <Button onClick={() => navigate("/signin")}>로그인</Button>
                </ButtonDiv>
            </Form>
        </SignInContainer>
    )
}

export default SignUp;
