import React from "react";
import { Icon } from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import {Overlay, BackDrop, CloseButton, Filler, Nav, NavLinkM,
    Content, InnerWrapper, Footer, SubLink } from "./style";
export default function MobileMenu(props){
    const {isOpen, onDismiss} = props;
    return(
        <Overlay isOpen={isOpen} onDismiss= {onDismiss}>
         <BackDrop />
         <Content aria-label="Menu">
             <InnerWrapper>
             <CloseButton onClick={onDismiss}>
             <Icon id="close" />
             <VisuallyHidden>Dismiss menu</VisuallyHidden>
         </CloseButton>
         <Filler />
         <Nav>
             <NavLinkM href="/sale">Sale</NavLinkM>
             <NavLinkM href="/new">New&nbsp;Releases</NavLinkM>
            <NavLinkM href="/men">Men</NavLinkM>
            <NavLinkM href="/women">Women</NavLinkM>
            <NavLinkM href="/kids">Kids</NavLinkM>
            <NavLinkM href="/collections">Collections</NavLinkM>
         </Nav>
         <Footer>
         <SubLink href="/terms">Terms and Conditions</SubLink>
            <SubLink href="/privacy">Privacy Policy</SubLink>
            <SubLink href="/contact">Contact Us</SubLink>
         </Footer>
             </InnerWrapper>
         </Content>
        </Overlay>
    )
}