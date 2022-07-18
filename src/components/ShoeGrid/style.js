import styled from "styled-components";
import { WEIGHTS } from "../../constants";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  /*
    Alternatively, if we can't use 'gap', we could set:
    margin: -16px;
    We'd also need to set this on the ShoeWrapper:
    margin: 16px;
  */
`;


export const ShoeWrapper = styled.div`
min-width: 275px;
flex: 1;
`;

export const Link = styled.a`
text-decoration: none;
color: inherit;
 
`;

export const LinkWrapper = styled.article``;


export const ImageWrapper = styled.div`
position: relative;

`;

export const ImageEffectWrapper = styled.div`
border-radius: 16px 16px 4px 4px;
overflow: hidden;

`;

export const Image = styled.img`
width: 100%;
will-change: transform;
display: block;
@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  transition: transform 0.4s ease-in;
  ${Link}:hover & {
    filter: grayscale(1);
    transform: scale(1.05) translateY(-1%);
    transition: transform 0.1s ease-in, filter 0.1s ease-out;
  }
}

`;

export const Flag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  background: red;
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
  font-size: ${14 / 18}rem;
  font-weight: ${WEIGHTS.bold};
  color: var(--color-white);
  border-radius: 2px;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.4s ease-in;
    ${Link}:hover & {
      transform: rotate(-5deg);
      transition: transform 0.1s ease-in;
    }
  }
`;

export const SaleFlag = styled(Flag)`
background-color: var(--color-primary);

`;

export const NewFlag = styled(Flag)`
background-color: var(--color-secondary);

`;

export const Row = styled.div`
font-size: 1rem;
display: flex;
justify-content: space-between;

`;

export const Name = styled.h3`
font-weight: ${WEIGHTS.medium};
color: var(--color-gray-900);
`;

export const Price = styled.span`
color: var(--color);
text-decoration: var(--text-decoration);

`;

export const ColorInfo = styled.p`
color: var(--color-gray-700);
`;

export const SalePrice = styled.span`
font-weight: ${WEIGHTS.medium};
color: var(--color-primary);
`;