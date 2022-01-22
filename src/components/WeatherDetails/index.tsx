import React from 'react'
import { WeatherDataModel } from '../../models/models'
import { ItemList, ContainerList, VerticalLine, MobileDetailsLine } from './styles'

export function WeatherDetails ({ main, wind }: WeatherDataModel): JSX.Element {

  return (
    <div>
      <MobileDetailsLine />
      <ContainerList>
        <VerticalLine />
        <ItemList>
          <span>
            Sensação Térmica:
          </span>
          <strong>
            {main?.feels_like}°
          </strong>
        </ItemList>
        <ItemList>
          <span>
            Umidade:
          </span>
          <strong>
            {main?.humidity}%
          </strong>
        </ItemList>
        <ItemList>
          <span>
            Vento:
          </span>
          <strong>
            {wind?.speed ? (wind.speed * 3.6).toFixed() : null} km/h
          </strong>
        </ItemList>
        <ItemList>
          <span>
            Pressão:
          </span>
          <strong>
            {main?.pressure} hpa
          </strong>
        </ItemList>
      </ContainerList>
    </div>
  )
}