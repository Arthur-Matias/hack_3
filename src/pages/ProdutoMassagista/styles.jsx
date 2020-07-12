import styled from 'styled-components';
import { User } from 'styled-icons/boxicons-solid'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--dark-blue);
`;

export const ImgContainer = styled.div`
    height: 30vh;
    width: 100%;
    background-color: var(--gray);
    flex-wrap: no-wrap;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContentHeader = styled.div`
    background-color: var(--soft-purple);
    width: 100vw;
    height: 10vw;
    border-radius: 15px 15px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;

    > p{
        font-size: 26px;
        font-weight: bold;
        color: var(--dark-blue);
    }
`;

export const ProfileIcon = styled(User)`
    height: 3.5vw;
    color: var(--dark-blue);
    cursor: pointer;
    &:hover{
        color: rgba(2,2,37, 0.7);
    }
`;

export const ContentDescription = styled.p`
    color: var(--white);
    max-width: 80vw;
    text-align: center;
    align-self: center;
    padding: 30px;
`;

export const ContentMap = styled.div`
    
`;

export const Button = styled.button`
    height: 45px;
    border-radius: 15px;
    min-width: 200px;
    background-color: var(--soft-purple);
    cursor: pointer;
    transition background 200ms;
    &:hover{
        background-color: rgba(152, 79, 165, 0.7);
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    margin-top: 150px;
    width: 500px;
    height: 45px;
    border-radius: 15px;
    background-color: var(--white);
    padding: 20px 30px;
    margin-bottom: 20px;
`;
