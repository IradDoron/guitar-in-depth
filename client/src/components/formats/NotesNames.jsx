import styled from 'styled-components';

const Span = styled.span`
  padding: 4px;
  margin: 6px;
  font-size: 1.5rem;
  color: #fff;
`;

function NotesNames({ notes }) {
  return (
    <div>
      {notes?.map((value, index) => {
        return <Span key={index}>{value}</Span>;
      })}
    </div>
  );
}

export default NotesNames;
