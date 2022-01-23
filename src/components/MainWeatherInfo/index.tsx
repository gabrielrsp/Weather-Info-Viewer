import React from 'react'
import { ContainerMainWeatherInfo, Container } from './styles'
import { RenderIconWeather } from '../RenderIconWeather'
import { MaxMinTemperature } from '../MaxMinTemperature'
import { WeatherDataModel } from '../../models/models'
import { Loading } from '../Loading'

export function MainWeatherInfo ({ name, main, weather }: WeatherDataModel): JSX.Element {

  if (!name) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <Container>
        <ContainerMainWeatherInfo>
          <strong>{name} </strong>
          <RenderIconWeather icon={weather ? weather[0].icon : ''} />
          <span style={{ marginTop: '-15px', marginBottom: '10px' }}>
            {weather ? weather[0].description : ''}
          </span>
          <strong style={{ marginBottom: '8px' }}>
            {main?.temp}°
          </strong>
        </ContainerMainWeatherInfo>
        <MaxMinTemperature main={main} />
      </Container>
    </>
  )

}