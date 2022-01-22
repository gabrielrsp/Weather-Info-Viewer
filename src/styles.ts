import styled from "styled-components";
export const MainContainer = styled.div`
  margin-top: 25px;
  background: var(--text-body);
  width: 600px;
  border-radius: 7px;
  padding: 15px;
  background-image: linear-gradient(to right top, #292f3b, #343c4b, #3f485a, #495469, #546078);
  box-shadow: 2px 2px 12px 2px #333333;

  h3 {
    text-align: center;
  }

  @media (max-width: 680px) {
    width: fit-content;
  }

`
export const Wrapper = styled.div`
  margin-top: 13px;
  display: flex;
  justify-content: space-evenly; 

  @media (max-width: 680px) {
    display: grid;
    width: fit-content;
  }

`;

export const ReloadButton = styled.button`
  padding: 9px;
  margin-top: -70px;
  margin-bottom: 6px;
  margin-right: 5px;
  place-self: end;
  font-weight: bold;
  font-size: 0.93rem;
  color: var(--text-title);
  border: 0;
  border-radius: 3px;

  @media (max-width: 680px) {
    margin-top: 20px;
  }

  transition-duration: 0.14s;
 
  &:hover {
    background-color: #cccccc; 
    color: #2a303c;
  }

`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 680px) {
    justify-content: center;
  }
`;