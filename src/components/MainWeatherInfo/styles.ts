import styled from 'styled-components'

export const ContainerMainWeatherInfo = styled.div`
  display: grid;
  justify-content: center;
  width: 110px;
  text-align: center;

  strong {
    font-size: 1.2rem;
    width: 240px;
    place-self: center;
  }

  span {
    width: 240px;
    place-self: center;
  }

  @media (max-width: 680px) {
    display: contents;
  }

`

export const Container = styled.div`
    @media (max-width: 680px) {
    display: contents;
  }

`