import React from 'react';
import { MenuContainer, LeftIcon, Title, RightIcon, MenuHeader, ProfilePic, ContentWrapper, MenuBody, MainMenu, Back, Profile, ChatIcon, WalletIcon, Cupons, Favs, PaymentIcon, AddressIcon, LastOrderIcon } from './styles.jsx'

export default function TopMenu(props){
    return (
        <>
            <MenuContainer>
                <input type="checkbox" id="chk"/>
                <label htmlFor="chk" className="menu-icon"><LeftIcon/></label>
                <MainMenu id="menu">
                    <ul>
                        <MenuHeader>
                            <ProfilePic />
                            <ContentWrapper>
                                <a href="#">ahmmfdc@gmail.com</a>
                            </ContentWrapper>
                        </MenuHeader>
                        <MenuBody>
                            <div className="item-container">
                                <li><a href="#"><Back />Voltar</a></li>
                            </div>
                            <div className="item-container">
                                <li><a href="#"><Profile />Perfil</a></li>
                            </div>
                            <div className="item-container">
                                <li><a href="#"><ChatIcon />Chat</a></li>
                            </div>
                            
                            <div className="item-container">
                                <li><a href="#"><WalletIcon />Carteira</a></li>
                            </div>
                            
                            <div className="item-container">
                                <li><a href="#"><Cupons />Cupons</a></li>
                            </div>
                            
                            <div className="item-container">
                                <li><a href="#"><Favs />Favoritos</a></li>
                            </div>
                            
                            <div className="item-container">
                                <li><a href="#"><PaymentIcon />Pagamento</a></li>
                            </div>
                            
                            <div className="item-container">
                                <li><a href="#"><AddressIcon />Endereços</a></li>
                            </div>
                            
                            <div className="item-container">
                                <li><a href="#"><LastOrderIcon />Pedidos anteriores</a></li>
                            </div>
                            
                        </MenuBody>
                        
                    </ul>
                </MainMenu>
                <Title>{props.name}</Title>
                <RightIcon>
                    <ul id='myDropdown' className="dropdown-content">
                        <li className="drop-down-item">op1</li>
                        <li className="drop-down-item">op2</li>
                    </ul>
                </RightIcon>
            </MenuContainer>
        </>
    )
};