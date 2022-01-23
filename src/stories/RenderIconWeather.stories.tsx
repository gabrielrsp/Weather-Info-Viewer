import React from 'react'
import { storiesOf } from '@storybook/react';
import { RenderIconWeather } from '../components/RenderIconWeather';

const weather = [
  {
    description: "nuvens dispersas",
    icon: "03n",
    id: 802,
    main: "Clouds",
  },
]

storiesOf('RenderIconWeather', module).add('Default', () => <RenderIconWeather icon={weather[0].icon} />)