import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid; 
  text-align: center;
`;

export const LineContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 680px) {
    justify-content: space-evenly;
  }
`;

