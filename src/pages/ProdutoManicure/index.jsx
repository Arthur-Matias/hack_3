import React from 'react';
import { Container, ImgContainer, Content, ContentHeader, ContentDescription, ContentMap, Button, Form, Input, ProfileIcon } from './styles.jsx'
import TopMenu from '../../components/TopMenu';
import ScrollView from '../../components/ScrollView';

export default function Produto(props){
    return (
        <>
            <TopMenu
            name="Manicure"
            />
            <Container onClick = {props.onClick}>
                <ImgContainer />
                <Content>
                    <ContentHeader>
                        <ProfileIcon />
                        <p>R$150,00</p>

                    </ContentHeader>
                    <ContentDescription>
                    Excelente manicure, pinto todas as unhas e faço desenhos.
                    </ContentDescription>
                </Content>
                <ContentMap />
                <Button onClick = {alert("Solicitação efetuada com sucesso!")}>Solicitar</Button>

            </Container>
            <Container>
                <ScrollView />
            </Container>
        </>
    )
};