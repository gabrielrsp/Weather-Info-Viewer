import React from 'react'
import { ContainerIcon } from './styles'

import i01d from '../../assets/icons/i01d.png'
import i01n from '../../assets/icons/i01n.png'
import i02d from '../../assets/icons/i02d.png'
import i02n from '../../assets/icons/i02n.png'
import i03d from '../../assets/icons/i03d.png'
import i03n from '../../assets/icons/i03n.png'
import i04d from '../../assets/icons/i04d.png'
import i04n from '../../assets/icons/i04n.png'
import i09d from '../../assets/icons/i09d.png'
import i09n from '../../assets/icons/i09n.png'
import i10d from '../../assets/icons/i10d.png'
import i10n from '../../assets/icons/i10n.png'
import i11d from '../../assets/icons/i11d.png'
import i11n from '../../assets/icons/i11n.png'
import i13d from '../../assets/icons/i13d.png'
import i13n from '../../assets/icons/i13n.png'
import i50d from '../../assets/icons/i50d.png'
import i50n from '../../assets/icons/i50n.png'
import { WeatherModel } from '../../models/models'

export function RenderIconWeather ({ icon }: WeatherModel): JSX.Element {

  let iconToRender

  switch (icon) {
    case '01d':
      iconToRender = i01d
      break
    case '01n':
      iconToRender = i01n
      break
    case '02d':
      iconToRender = i02d
      break
    case '02n':
      iconToRender = i02n
      break
    case '03d':
      iconToRender = i03d
      break
    case '03n':
      iconToRender = i03n
      break
    case '04d':
      iconToRender = i04d
      break
    case '04n':
      iconToRender = i04n
      break
    case '09d':
      iconToRender = i09d
      break
    case '09n':
      iconToRender = i09n
      break
    case '10d':
      iconToRender = i10d
      break
    case '10n':
      iconToRender = i10n
      break
    case '11d':
      iconToRender = i11d
      break
    case '11n':
      iconToRender = i11n
      break
    case '13d':
      iconToRender = i13d
      break
    case '13n':
      iconToRender = i13n
      break
    case '50d':
      iconToRender = i50d
      break
    case '50n':
      iconToRender = i50n
      break
  }

  return (
    <ContainerIcon>
      <img src={iconToRender} />
    </ContainerIcon>
  )

}


