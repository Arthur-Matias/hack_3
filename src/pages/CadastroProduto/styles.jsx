import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--dark-blue)
`

export const FormCadastro = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
`

export const InputWrapper = styled.div`
    text-align: center;
    margin: 10px;
    display: flex;
    flex-direction: column;
    &:first-child{
        margin-top: 20%;
    }
    >label{
        font-size: 16px;
        font-weight: bold;
        color: var(--white);
        max-width: 300px;
        padding: 3px;
    }
    >button{
        width: 200px;
        height: 30px;
        border-radius: 10px;
        background-color: var(--soft-purple);
        cursor: pointer;
        transition: background-color 200ms;
        &:hover{
            background-color: rgba(152, 79, 165, 0.6);
        }
    }
`

export const InputNome = styled.input`
    height: 45px;
    width: 300px;
    border-radius: 10px;
    padding: 10px;
`

export const InputPreco = styled.input`
    height: 45px;
    width: 300px;
    border-radius: 10px;
    padding: 10px;
`

export const Descricao = styled.input`
    height: 45px;
    width: 300px;
    border-radius: 10px;
    padding: 10px;
`

export const DescricaoCurta = styled.input`
    height: 45px;
    width: 300px;
    border-radius: 10px;
    padding: 10px;
`

export const InputFile = styled.input`
    height: 45px;
    width: 300px;
    border-radius: 10px;
    padding: 10px;
    color: var(--white);

`
