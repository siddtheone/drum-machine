import styled from 'styled-components';

const StyledPads = styled.section`
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin: 0 auto;

  .display {
    grid-column: 1 / -1;
    padding: 1em;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 1.5rem;
  }
`;

export default StyledPads;
