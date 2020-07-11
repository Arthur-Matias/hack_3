import React from 'react';
import { Container, SearchInput, InputWrapper } from './styles.jsx'
import TopMenu from '../../components/TopMenu';
import ScrollView from '../../components/ScrollView';

export default function Cliente({ history }){
    return (
        <>
            <Container>
                <TopMenu className="Cliente" />
                <InputWrapper>
                    <SearchInput />
                    <aside>filtros</aside>
                </InputWrapper>
                <ScrollView />
            </Container>
        </>
    )
};