import React from 'react'
import { storiesOf } from '@storybook/react';
import { MainWeatherInfo } from '../components/MainWeatherInfo';

const name = 'Nova Veneza'

const main = {
  feels_like: 26.49,
  grnd_level: 923,
  humidity: 85,
  pressure: 1012,
  sea_level: 1012,
  temp: 25.65,
  temp_max: 28.17,
  temp_min: 25.65,
}

const weather = [
  {
    description: "nuvens dispersas",
    icon: "03n",
    id: 802,
    main: "Clouds",
  },
]


storiesOf('MainWeatherInfo', module).add('Default', () => <MainWeatherInfo name={name} main={main} weather={weather} />)