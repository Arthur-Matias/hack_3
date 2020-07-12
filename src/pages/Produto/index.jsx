import React from 'react';
import { Container, ImgContainer, Content, ContentHeader, ContentDescription, ContentMap, Button, Form, Input, ProfileIcon } from './styles.jsx'
import TopMenu from '../../components/TopMenu';
import ScrollView from '../../components/ScrollView';

export default function Produto(props){
    return (
        <>
            <TopMenu
            name="Conserto tela de Iphone"
            />
            <Container>
                <ImgContainer />
                <Content>
                    <ContentHeader>
                        <ProfileIcon />
                        <p>R$99,99</p>

                    </ContentHeader>
                    <ContentDescription>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Sed sit amet velit vitae 
                    elit ultricies sagittis. Nulla ac gravida 
                    leo. Cras congue erat nec orci rhoncus, 
                    ac congue magna euismod. Cras placerat 
                    lorem non dolor fermentum, vitae dictum 
                    era...
                    </ContentDescription>
                </Content>
                <ContentMap />
                <Button>Comprar</Button>

                <Form>
                    <Input placeholder="Isso ainda está disponível?" />
                    <Button>Falar com vendedor</Button>
                </Form>
            </Container>
            <Container>
                <ScrollView />
            </Container>
        </>
    )
};