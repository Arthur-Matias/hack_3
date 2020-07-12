import React from 'react';
import { Container, ProductPhoto, ProductTitle, ProductDescription, Price } from './styles.jsx';

import { useLocation } from "react-router-dom";



export default function Product(props){
    const location = useLocation();

    //const pushEvent = props.onClick //recebe outros parametros para a mudança da tela
    //const parameters = location.state.type
    

    return (
        <>
            <Container onClick = {props.onClick}>
                    <ProductPhoto>
                        <img src={props.photo} alt=""/>
                    </ProductPhoto>
                    <ProductTitle>{props.name}</ProductTitle>
                    <ProductDescription>{props.shortDescription}</ProductDescription>
                    <Price>{props.price}</Price>
            </Container>
        </>
    )
}
