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
`
export const Wrapper = styled.div`
  margin-top: 13px;
  display: flex;
  justify-content: space-evenly; 
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
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;