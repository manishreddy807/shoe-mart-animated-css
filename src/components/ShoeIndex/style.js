import styled from "styled-components";
import { QUERIES, WEIGHTS } from "../../constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

export const MainColumn = styled.div`
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media ${QUERIES.tabletAndSmaller} {
    align-items: flex-end;
  }
`;

export const MobileBreadcrumbs =  styled.div`
display: none;
@media ${QUERIES.tabletAndSmaller} {
  display: revert;
}
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export const SortFilterWrapper = styled.div`
@media ${QUERIES.phoneAndSmaller} {
  display: none;
}
`;

export const LeftColumn = styled.div`
flex-basis: 248px;
@media ${QUERIES.tabletAndSmaller} {
  display: none;
}
`;

export const DesktopBreadcrumbs = styled.div`
@media ${QUERIES.tabletAndSmaller} {
  display: none;
}
`;
