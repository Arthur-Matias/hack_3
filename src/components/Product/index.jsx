import React from 'react';
import { Container, ProductPhoto, ProductTitle, ProductDescription, Price } from './styles.jsx';

export default function Product(props){
    return (
        <>
            <Container>
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
