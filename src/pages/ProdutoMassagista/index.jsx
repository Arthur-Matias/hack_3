import React from 'react';
import { Container, ImgContainer, Content, ContentHeader, ContentDescription, ContentMap, Button, Form, Input, ProfileIcon } from './styles.jsx'
import TopMenu from '../../components/TopMenu';
import ScrollView from '../../components/ScrollView';

export default function Produto(props){
    return (
        <>
            <TopMenu
            name="Massagista"
            />
            <Container onClick = {props.onClick}>
                <ImgContainer />
                <Content>
                    <ContentHeader>
                        <ProfileIcon />
                        <p>R$99,99</p>

                    </ContentHeader>
                    <ContentDescription>
                    Excelente massagista, estalo as costas e o pescoço.
                    </ContentDescription>
                </Content>
                <ContentMap />
                <Button onClick = {() => alert("Solicitação efetuada com sucesso!")}>Solicitar</Button>
            </Container>
            <Container>
                <ScrollView />
            </Container>
        </>
    )
};