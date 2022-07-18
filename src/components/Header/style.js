import styled, {keyframes} from 'styled-components'
import { QUERIES, WEIGHTS } from '../../constants'
import {DialogContent, DialogOverlay} from '@reach/dialog';
const fadeIn = keyframes`from {opacity: 0} to {opacity: 1}`;
const slideIn = keyframes`from {transform: translateX(100%)} to { transform: translateX(0%)}`;


export const MainHeader = styled.div`
display: flex;
align-items: baseline;
padding: 18px 32px;
border-bottom: 1px solid var(--color-gray-300);
overflow: auto;
@media ${QUERIES.tabletAndSmaller} {
  justify-content: space-between;
  align-items: center;
  border-top: 4px solid var(--color-gray-900);
}
@media ${QUERIES.phoneAndSmaller} {
  padding-left: 16px;
  padding-right: 16px;
}
`

export const LogoWrapper = styled.div`
flex: 1;
@media ${QUERIES.tabletAndSmaller} {
  flex: revert;
}

`;

export const DesktopNav = styled.nav`
display: flex;
gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
margin: 0px 48px;
@media ${QUERIES.tabletAndSmaller} {
  display: none;
}


`;

export const NavLink = styled.span`
font-size: 1.125rem;
color: var(--color-gray-900);
font-weight: ${WEIGHTS.medium};
display: block;
will-change: transform;
transition: transform 0.2s ease-out;


`;

export const MainLinkWrapper = styled.a`
text-transform: uppercase;
text-decoration: none;
&:first-of-type ${NavLink} {
  color: var(--color-secondary);
}
height: 1.5rem;
overflow: hidden;
will-change: transform;
@media (prefers-reduced-motion: no-preference) {
  :hover ${NavLink} {
    transform: translateY(-100%);
  }
}

`;

export const BoldNavLink = styled.div`
font-weight: ${WEIGHTS.bold};
 
`;

export const MobileActions = styled.div`
   display:none;
   @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }
  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

export const UnStyledButton = styled.button`
display: ${(props) => props.display || 'block'};
margin: 0;
padding: 0;
border: none;
background: transparent;
cursor: pointer;
text-align: left;
font: inherit;
color: inherit;
&:focus {
  outline-offset: 2px;
}
&:focus:not(:focus-visible) {
  outline: none;
}

`;

export const ShoppingBagButton = styled(UnStyledButton)`
 transform: translateX(-2px);

`;

export const Filler = styled.div`
flex: 1;
@media ${QUERIES.tabletAndSmaller} {
  display: none;
}

`;

export const Overlay = styled(DialogOverlay)`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
justify-content: flex-end;
`;

export const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  position: fixed;
  top: 0;
  right: 0;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 200ms;
    animation-delay: 100ms;
    animation-fill-mode: both;
  }
`;

export const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 500ms;
  animation-delay: 400ms;
  animation-fill-mode: both;
`;

export const BackDrop = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
animation: ${fadeIn} 200ms;
background: var(--color-backdrop-open);


`;

export const CloseButton = styled(UnStyledButton)`
position: absolute;
top: 10px;
right: 0;
padding: 16px;
`;

export const Nav = styled.nav`
display: flex;
flex-direction: column;
gap: 16px;

`;

export const NavLinkM = styled.a`
color: var(--color-gray-900);
font-weight: ${WEIGHTS.medium};
text-decoration: none;
font-size: 1.125rem;
text-transform: uppercase;
&:first-of-type {
  color: var(--color-secondary);
}
`;

export const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

export const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;
