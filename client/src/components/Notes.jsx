import styled from 'styled-components';

const Span = styled.span`
padding: 4px;
margin: 6px;
font-size: 1.5rem;
color: #fff;
`

function Notes(props){

return (
  <div>
    {props.notes?.map((value, index) => {
      return <Span key={index}>{value}</Span>
    })}
  </div>
)

  }

  export default Notes;
  