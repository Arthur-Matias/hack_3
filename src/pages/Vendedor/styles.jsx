import styled from 'styled-components';
import { PlusCircle } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--dark-blue);
`;

export const InputWrapper = styled.div`
    padding: 10px 20px;
    margin-bottom: 50px;
`;

export const SearchInput = styled.input`
    margin-top: 100px;
    width: 500px;
    height: 45px;
    border-radius: 15px;
    background-color: var(--white);
    padding: 20px 30px;
`;

export const AddButton = styled(PlusCircle)`
    width: 80px;
    top: 90vh;
    left: 85vw;
    position: absolute;
    color: var(--soft-purple);

    transition color 200ms;
    &:hover{
        color: rgba(152, 79, 165, 0.4);
    }
`;