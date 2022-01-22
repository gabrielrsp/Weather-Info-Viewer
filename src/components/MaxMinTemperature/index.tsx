import React from 'react'
import { WeatherDataModel } from '../../models/models'
import { LineContainer, GridContainer } from './styles'

export function MaxMinTemperature ({ main }: WeatherDataModel): JSX.Element {
  return (
    <LineContainer>
      <GridContainer>
        <span>{main?.temp_max}°</span>
        <span> Max </span>
      </GridContainer>
      <GridContainer>
        <span>{main?.temp_min}°</span>
        <span>Min</span>
      </GridContainer>
    </LineContainer>
  )
}