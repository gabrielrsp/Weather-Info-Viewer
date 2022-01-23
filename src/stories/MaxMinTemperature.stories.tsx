import React from 'react'
import { storiesOf } from '@storybook/react';
import { MaxMinTemperature } from '../components/MaxMinTemperature';

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

storiesOf('MaxMinTemperature', module).add('Default', () => <MaxMinTemperature main={main} />)