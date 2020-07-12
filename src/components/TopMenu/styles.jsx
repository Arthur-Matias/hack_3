import styled from 'styled-components';
import { Menu } from 'styled-icons/entypo';
import { DotsThreeVertical } from 'styled-icons/entypo';
import {ArrowBack} from 'styled-icons/boxicons-regular';
import {Person} from 'styled-icons/evaicons-solid';
import {Chat} from 'styled-icons/boxicons-solid';
import { Wallet } from 'styled-icons/boxicons-solid';
import { Ticket } from 'styled-icons/entypo';
import { FavoriteBorder } from 'styled-icons/material';
import { Payment } from 'styled-icons/material';
import { Address } from 'styled-icons/entypo';
import { JediOrder } from 'styled-icons/fa-brands';

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;  
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: var(--soft-purple);
    > input{ 
        display: none;
    }
    >label{
        align-self: center;
    }

    #chk:checked ~ #menu{
        display: block;
    }
`;

export const LeftIcon = styled(Menu)`
    display: block;
    height: 3vh;
    align-self: center;
    justify-self: center;
    margin: 50px;
    cursor: pointer;
    transition: color 200ms;
    &:hover{
        color: rgba(0, 0, 0, 0.5);
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
    transition color 200ms;
    &:hover{
        color: rgba(0, 0, 0, 0.5);
    }
`;

export const MenuHeader = styled.div`
    background-color: var(--soft-purple);
    height: 20vh;
    width: 500px;
    padding: 30px;
`;

export const ProfilePic = styled.div`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: var(--gray);
`;

export const ContentWrapper = styled.div`
    padding-top: 20px;
    >a{
        text-decoration: none;
        color: var(--white);
    }
`;

export const MainMenu = styled.div`
    position: absolute;
    top: 60px;
    display: none;
    ul{
        list-style: none;
    }
`;

export const MenuBody = styled.div`
    padding: 50px;
    background-color: var(--white);
    >.item-container{
        cursor: pointer;
        &:hover{
            background-color: rgba(255, 253, 233, 0.8)
        }
    }
    >.item-container li{
        padding: 20px;
        cursor: pointer;
    }
    >.item-container li a{
        text-decoration: none;
        color: var(--dark-blue);
        font-weight: bold;
    }
    
`;

export const Back = styled(ArrowBack)`
    width: 20px;
    margin-right: 15px;
`;

export const Profile = styled(Person)`
    width: 20px;
    margin-right: 15px;
`;

export const ChatIcon = styled(Chat)`
    width: 20px;
    margin-right: 15px;
`;

export const WalletIcon = styled(Wallet)`
    width: 20px;
    margin-right: 15px;
`;

export const Cupons = styled(Ticket)`
    width: 20px;
    margin-right: 15px;
`;

export const Favs = styled(FavoriteBorder)`
    width: 20px;
    margin-right: 15px;
`;

export const PaymentIcon = styled(Payment)`
    width: 20px;
    margin-right: 15px;
`;

export const AddressIcon = styled(Address)`
    width: 20px;
    margin-right: 15px;
`;

export const LastOrderIcon = styled(JediOrder)`
    width: 20px;
    margin-right: 15px;
`;

