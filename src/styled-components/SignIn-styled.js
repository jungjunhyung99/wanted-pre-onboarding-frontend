import styled from "styled-components";

export const SignInContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`;

export const Input = styled.input`
    width: 20rem;
    border-radius: 2rem;
    padding-left: 1rem;
    height: 2rem;
`;

export const Button = styled.button`
    width: 8rem;
    font-size: 1.5rem;
    border: 3px solid black;
    background-color: white;
    border-radius: 1rem;
    
`;

export const ButtonDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`