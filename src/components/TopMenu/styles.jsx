import styled from 'styled-components';
import { Menu } from 'styled-icons/entypo';
import { DotsThreeVertical } from 'styled-icons/entypo';

export const MenuContainer = styled.div`
    display: flex;  
    justify-content: space-between;  
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: var(--soft-purple)
    
`;

export const LeftIcon = styled(Menu)`
    display: block;
    height: 40px;
    align-self: center;
    justify-self: center;
    margin: 50px;
    cursor: pointer;
    transition: color 200ms;
    &:hover{
        color: var(--white);
    }
    
`;

export const Title = styled.strong`
    align-self: center;
    justify-self: center;
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    color: var(--dark-blue);
`;

export const RightIcon = styled(DotsThreeVertical)`
    display: block;
    height: 25px;
    align-self: center;
    justify- self: center;
    margin: 50px;
    cursor: pointer;
    transition: color 200ms;
    &:hover{
        color: var(--white);
    }
`;

