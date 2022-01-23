import React from 'react'
import { storiesOf } from '@storybook/react';
import { WeatherDetails } from '../components/WeatherDetails';

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

const wind = {
  deg: 38,
  gust: 2.36,
  speed: 1.47,
}

storiesOf('WeatherDetails', module).add('Default', () => <WeatherDetails main={main} wind={wind} />)