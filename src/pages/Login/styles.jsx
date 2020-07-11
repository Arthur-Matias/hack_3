import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: var(--dark-blue);
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.div`
    width: 200px;
    height: 200px;
    margin 50px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;
`;

export const Button = styled.button`
    background-color: var(--soft-purple);
    color: var(--dark-blue);
    height: 50px;
    width: 300px;
    padding: 10px 20px;
    font-size: 20px;
    margin: 15px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 200ms;

    &:hover{
        background-color: rgba(152, 79, 165, 0.8);
    }
`;

export const Terms = styled.div`
    text-align: center;
    color: var(--white);
`;

export const Header = styled.div`
    margin-top: 10px;
`;

export const Main = styled.div`
    >a{
        color: var(--light-blue);
        transition: color 200ms;
        &:hover{
            color: rgba(32, 43, 140, 0.8);
        }
    }
`;
