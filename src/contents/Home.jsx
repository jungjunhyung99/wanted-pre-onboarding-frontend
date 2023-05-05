import { useNavigate } from "react-router-dom";
import { HomeButtonDiv, HomeDiv, SignInButton, SignUpButton } from "../styled-components/Home-styled";

function Home() {
    const navigate = useNavigate();
    return (
        <HomeDiv>
            회원가입 / 로그인
            <HomeButtonDiv>
                <SignInButton onClick={() => navigate("/signin")}>로그인</SignInButton>
                <SignUpButton onClick={() => navigate("/signup")}>회원가입</SignUpButton>
            </HomeButtonDiv>
        </HomeDiv>
    );
}

export default Home;