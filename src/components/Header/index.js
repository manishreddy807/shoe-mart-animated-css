import React, { useState } from 'react';

import { MainHeader, LogoWrapper, DesktopNav, MainLinkWrapper,NavLink, BoldNavLink,
    MobileActions, ShoppingBagButton, UnStyledButton,Filler 
} from './style';
import VisuallyHidden from '../VisuallyHidden';
import { Icon } from '../Icon';
import MobileMenu from './MobileMenu';
import { SuperHeader } from './SuperHeader';
import Logo from './Logo';

export default function Header(){
      const [showMobileMenu, setShowMobileMenu] = useState(false)
    const links = [
        { text: "Sale", href: "/sale" },
        { text: "New Releases", href: "/sale" },
        { text: "Men", href: "/men" },
        { text: "Women", href: "/women" },
        { text: "Kids", href: "/kids" },
        { text: "Collections", href: "/collections" },
      ];
    return(
        <header>
            <SuperHeader />
            <MainHeader>
                <LogoWrapper>
                   <Logo />
                </LogoWrapper>
                <DesktopNav>
                       {links.map((link, i) => (
                           <MainLink key={i} text={link.text} href={link.href} />
                       ))}
                </DesktopNav>
                <MobileActions>
                    <ShoppingBagButton>
                        <Icon id="shopping-bag" />
                        <VisuallyHidden>Open cart</VisuallyHidden>
                    </ShoppingBagButton>
                    <UnStyledButton>
                        <Icon id="search"/>
                        <VisuallyHidden>Search</VisuallyHidden>
                    </UnStyledButton>
                    <UnStyledButton onClick={() => setShowMobileMenu(true)}>
                        <Icon id="menu" />
                        <VisuallyHidden>Open menu</VisuallyHidden>
                    </UnStyledButton>
                </MobileActions>
                <Filler />
            </MainHeader>
            <MobileMenu isOpen = {showMobileMenu} onDismiss = {() => setShowMobileMenu(false)} />
        </header>
    )
}


const MainLink = ({text, href}) => {
    return(
        <MainLinkWrapper>
            <NavLink>{text}</NavLink>
            <BoldNavLink>{text}</BoldNavLink>
        </MainLinkWrapper>
    )
}