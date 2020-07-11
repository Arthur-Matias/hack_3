import React from 'react';
import { MenuContainer, LeftIcon, Title, RightIcon } from './styles.jsx'

export default function TopMenu(props){
    function dropDownclick(){

    }
    return (
        <>
            <MenuContainer className="Cliente">
                <LeftIcon />
                <Title>{props.name}</Title>
                <RightIcon onclick={dropDownclick()}>
                    <ul id='myDropdown' className="dropdown-content">
                        <li className="drop-down-item">op1</li>
                        <li className="drop-down-item">op2</li>
                    </ul>
                </RightIcon>
            </MenuContainer>
        </>
    )
};