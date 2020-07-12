import React from 'react';
import {Container, Logo, ButtonContainer, Button, Terms, Header, Main} from './styles.jsx'
import logo from '../../assets/soft_purple.svg'
import { useHistory } from 'react-router-dom';



export default function Login(){
    const history = useHistory();
    function Entregador(){
        history.push('/entregador')
    }
    function Vendedor(){
        history.push('/vendedor')
    }
    function Cliente(event){
        history.push('/cliente')
    }

    return (
        <>
            <Container>
                <Logo>
                    <img src={logo} alt="logo"/>
                </Logo>
                <ButtonContainer>
                    <Button id="clientButton" onClick = {(e) =>Cliente()}>Cliente</Button>
                    <Button id="deliveryButton" onClick = {(e) =>Entregador()}>Sou Entregador</Button>
                    <Button id="vendorButton" onClick = {(e) =>Vendedor()}>Sou vendedorr</Button>
                </ButtonContainer>
                <Terms>
                    <Header>
                        <strong>Para sua segurança leia nossos</strong>
                    </Header>
                    <Main>
                        <a href="#">Termos e Condições</a>
                    </Main>
                </Terms>
            </Container>
        </>
    )
}