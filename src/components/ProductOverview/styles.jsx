import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: var(--dark-blue);
    align-items: center;
    justify-items: center;
    padding: 20px;
    height: 100%;
    overflowY: scroll;
    text-align: center;
    border-radius: 10px;
    transition background 200ms;
    &:hover{
        background-color: rgba(152, 79, 165, 0.4);
    }
`;

export const ProductPhoto = styled.div`
    width: 150px;
    height: 150px;
    background-color: var(--soft-purple);
    border-radius: 10px;
    margin-bottom: 15px;
`;

export const ProductTitle = styled.strong`
    color: var(--white);
    font-size: 20px;
    margin-bottom: 5px;
`;

export const ProductDescription = styled.p`
    color: var(--white);
    font-size: 16px;
    font-weight: 100;
    margin-bottom: 3px;
`;

export const Price = styled.p`
    color: var(--white);
    font-size: 26px;
    font-weight: 300;
`;