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
    function Cliente(){
        history.push('/cliente')
    }
    return (
        <>
            <Container>
                <Logo>
                    <img src={logo} alt="logo"/>
                </Logo>
                <ButtonContainer>
                    <Button id="deliveryButton" onclick={Entregador}>Sou entregador</Button>
                    <Button id="vendorButton" onclick={Vendedor}>Sou vendedor</Button>
                    <Button id="clientButton" onclick={Cliente}>Sou cliente</Button>
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