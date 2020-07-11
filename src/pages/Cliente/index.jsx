import React from 'react';
import { Container, SearchInput, InputWrapper } from './styles.jsx'
import TopMenu from '../../components/TopMenu';
import ScrollView from '../../components/ScrollView';

export default function Cliente({ history }){
    return (
        <>
            <Container>
                <TopMenu 
                    className="Cliente isHome"
                    name="Home Cliente" 
                />
                <InputWrapper>
                    <SearchInput placeholder="Busque por um Produto aqui"/>
                    <aside>filtros</aside>
                </InputWrapper>
                <ScrollView />
            </Container>
        </>
    )
};