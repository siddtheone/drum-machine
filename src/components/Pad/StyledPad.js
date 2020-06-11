import styled from 'styled-components';

const StyledPad = styled.div`

  font-size: 5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  transition: .1s;
  box-shadow: ${({active}) => !active ? shadowGen(5) : 'none'};
  transform: ${({active}) => !active ? 'translateY(0)' : 'translateY(2px)'};
  background: white;
  color: var(--bg);
`;

function shadowGen(k) {
  const shadow = [];
  for(let i = 1; i <= k; i++) {
    shadow.push(`${i}px ${i}px 5px rgba(0, 0, 0, 0.2)`);
  }

  return shadow.join(', ');
}

export default StyledPad;
