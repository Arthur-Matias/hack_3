import React from 'react';
import { Container, SearchInput, InputWrapper, AddButton } from './styles.jsx'
import TopMenu from '../../components/TopMenu';
import ScrollView from '../../components/ScrollView';

export default function Vendedor({ history }){
    return (
        <>
            <Container>
                <TopMenu 
                    name="Home Vendedor"
                />
                <InputWrapper>
                    <SearchInput placeholder="Busque por um Produto aqui"/>
                </InputWrapper>
                <ScrollView />
                <AddButton />
            </Container>
        </>
    )
};