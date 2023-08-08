import { useNavigate } from "react-router-dom";
import { HomeButtonDiv, SignInButton, SignUpButton } from "../styled-components/Home-styled";

function HomePage() {
    const navigate = useNavigate();
    return (
        <div>
            로그인 / 회원가입
            <HomeButtonDiv>
                <SignInButton onClick={() => navigate("/signin")}>로그인</SignInButton>
                <SignUpButton onClick={() => navigate("/signup")}>회원가입</SignUpButton>
            </HomeButtonDiv>
        </div>
    );
}  

export default HomePage;