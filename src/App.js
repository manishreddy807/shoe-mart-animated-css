import React, { useState } from 'react';
import styled from 'styled-components';
import { QUERIES } from './constants';
import Header from './components/Header';
import { ShoeIndex } from './components/ShoeIndex';

function App() {
    const [sortId, setSortId] = useState('newest');
  return (
    <>
    <Header />
    <Main>
      <ShoeIndex sortId={sortId} setSortId={setSortId} />
    </Main>
    </>
  );
}

const Main = styled.main`
  padding: 64px 32px;
  @media ${QUERIES.tabletAndSmaller} {
    padding: 48px 32px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 48px 16px;
  }
`;

export default App;
