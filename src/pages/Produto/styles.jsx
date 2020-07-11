import styled from 'styled-components';

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
`;


export const SearchInput = styled.input`
    margin-top: 150px;
    width: 500px;
    height: 45px;
    border-radius: 15px;
    background-color: var(--white);
    padding: 20px 30px;
`;