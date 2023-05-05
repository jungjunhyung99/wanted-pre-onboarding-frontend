import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50rem;
    height: 50rem;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    font-weight: 700;
    border: 2px solid black;
    border-radius: 3rem;
`;

export const HomeButtonDiv = styled.div`
    display: flex;
    justify-content: space-between;
    
    padding: 3rem 2rem;
    width: 30rem;
`;

export const SignInButton = styled.button`
    width: 10rem;
    height: 6rem;
    font-size: 2rem;
    font-weight: 600;
    background-color: #666666;
`;

export const SignUpButton = styled(SignInButton)`
    
`;