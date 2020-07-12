import React from 'react';
import { Container, FormCadastro, InputWrapper, InputNome, InputPreco, Descricao, DescricaoCurta, InputFile } from './styles.jsx'
import TopMenu from '../../components/TopMenu';

export default function CadastroProduto({ history }){
    return (
        <>
            <Container>
                <TopMenu 
                    name="Cadastrar novo Produto" 
                />
                <FormCadastro>

                    <InputWrapper>
                        <label htmlFor="inputName">O que você está vendendo?</label>
                        <InputNome id="inputName" type="text" />
                    </InputWrapper>

                    <InputWrapper>
                        <label htmlFor="inputPreco">Quanto custa?</label>
                        <InputPreco id="inputPreco" type="text" maxlength="8" />
                    </InputWrapper>

                    <InputWrapper>
                        <label htmlFor="descricao">Descreva o que você está vendendo</label>
                        <Descricao id="descricao" type="text" />
                    </InputWrapper>

                    <InputWrapper>
                        <label htmlFor="shortDescription">Descreva brevemente o que você está vendendo</label>
                        <DescricaoCurta id="shortDescription" type="text" maxlength="50" />
                    </InputWrapper>

                    <InputWrapper>
                        <label htmlFor="inputFile">Insira uma foto do produto</label>
                        <InputFile id="inputFile" type="file" multiple />
                    </InputWrapper>
                    <InputWrapper>
                        <button>Enviar</button>
                    </InputWrapper>
                    
                </FormCadastro>
                
            </Container>
        </>
    )
};