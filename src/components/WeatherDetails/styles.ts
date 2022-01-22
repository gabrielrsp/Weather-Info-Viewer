import styled from 'styled-components'

export const ItemList = styled.li`
  margin - bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin-bottom: 5px;
  margin-left: 18px;

  @media (max-width: 680px) {
    margin-left: 0px;
  }
`

export const ContainerList = styled.ul`
  width: 300px;
  margin: 0 5px 0 auto;
  margin-right: -60px;

  @media (max-width: 680px) {
    margin: 15px 0 0 0;
  }
`

export const VerticalLine = styled.div`
  width: 2px; 
  background-color: #fff; 
  height: 255px;
  border-radius: 5px; 
  float: left;
  margin-right: 10px;
  margin-top: 2px;

  @media (max-width: 680px) {
    display: none;
  }
`
export const MobileDetailsLine = styled.hr`
  visibility: hidden;

  @media (max-width: 680px) {
    margin-top: 20px;
    visibility: visible;
  }
`
