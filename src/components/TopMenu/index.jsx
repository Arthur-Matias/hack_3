import React from 'react';
import { MenuContainer, LeftIcon, Title, RightIcon } from './styles.jsx'

export default function TopMenu(props){
    function dropDownclick(){

    }
    return (
        <>
            <MenuContainer className="Cliente">
                <LeftIcon className={props.isHome? "isHome":""} />
                <Title></Title>
                <RightIcon onclick={dropDownclick()}>
                    <ul id='myDropdown' className="dropdown-content">
                        <li className={props.isHome? "isHome drop-down-item":"drop-down-item"}>op1</li>
                        <li className={props.isHome? "isHome drop-down-item":"drop-down-item"}>op2</li>
                        <li className={props.isHome? "isHome drop-down-item":"drop-down-item"}>op3</li>
                        <li className={props.isHome? "isHome drop-down-item":"drop-down-item"}>op4</li>
                    </ul>
                </RightIcon>
            </MenuContainer>
        </>
    )
};