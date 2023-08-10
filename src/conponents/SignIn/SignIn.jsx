import { useEffect, useState } from "react";
import { Button, ButtonDiv, Form, Input, SignInContainer } from "../../styled-components/SignIn-styled";
import { useNavigate } from "react-router-dom";
import { signinFunc } from "../../API/api";
import { CheckToken, checkValid } from "../../hook/hook";

function SignIn() {
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
            signinFunc(form.email, form.password).then((result) => {
                if(result){
                    localStorage.setItem('token', result.access_token);
                    navigate("/todo");
                }
            })            
    };

    useEffect(() => {
        if(CheckToken()){
            navigate("/todo");
        }
    },[navigate]);
    
    return(
        <SignInContainer>
            로그인
            <Form onSubmit={onSubmit}>
                <Input type="text" name="email" placeholder="이메일" value={form.email} data-testid="email-input" onChange={onChange}/>
                <Input type="text" name="password" placeholder="비밀번호" value={form.password} data-testid="password-input" onChange={onChange}/>
                <ButtonDiv>
                    {valid ? <Button data-testid="signin-button">로그인</Button> : <Button disabled>로그인</Button>}
                    <Button onClick={() => navigate("/signup")}>회원가입</Button>
                </ButtonDiv>
            </Form>
        </SignInContainer>
    )
}

export default SignIn;