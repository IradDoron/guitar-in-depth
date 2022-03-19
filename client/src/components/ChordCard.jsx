import styled from 'styled-components';
import { useState } from 'react';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 4px;
  border-radius: 2rem;
  margin-top: 15px;
`;

const Header = styled.h1`
  color: pink;
  font-size: 15px;
`;
const Span = styled.span`
  padding: 6px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

function ChordCard({ handleTonic, handleMode, mode, tonic }) {
  return (
    <>
      <Column>
        <Header>
          <Span>{tonic}</Span>
          <Span>{mode}</Span>
          <Span>{tonic === 'Get tonic' ? '' : 'Scale'}</Span>
        </Header>
        <Row>
          <Button onClick={handleTonic}>Get Tonic</Button>
          <Button onClick={handleMode}>Get Mode</Button>
        </Row>
      </Column>
    </>
  );
}

export default ChordCard;
