import { useState } from 'react';
import styled from 'styled-components';

const ShowBtn = styled.button`
  font-size: 2rem;
`;

const Container = styled.div`
  border: solid red;
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
`;

function NotesFormatBox({ name, children, notes }) {
  const [isShow, setIsShow] = useState(false);
  function handleClick() {
    setIsShow(!isShow);
  }

  return (
    <>
      <ShowBtn onClick={handleClick}>
        {isShow ? '-' : '+'}
        {name}
      </ShowBtn>
      <Container isShow={isShow}>{children}</Container>
    </>
  );
}

export default NotesFormatBox;
