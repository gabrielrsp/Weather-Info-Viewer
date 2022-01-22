import React, { useEffect, useState } from 'react'
import { GlobalStyle } from './styles/global'
import { api } from './services/api';
import { MainWeatherInfo } from './components/MainWeatherInfo'
import { WeatherDetails } from './components/WeatherDetails'
import { WeatherDataModel } from './models/models';
import { MainContainer, Wrapper, ReloadButton, ContainerButton } from './styles'

export function App () {
  const [location, setLocation] = useState(false)
  const [weatherData, setWeatherData] = useState({} as WeatherDataModel)
  const [refreshData, setRefreshData] = useState(false)

  const getWeather = async (lat: number, long: number) => {
    try {
      const res = await api.get('weather',
        {
          params: {
            lat,
            lon: long,
            appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
            lang: 'pt',
            units: 'metric',
          },
        }
      )
      setWeatherData(res.data)
    } catch (error) {
      alert('Ocorreu um erro ao buscar os dados')
    }
  }

  //-16.3716327 -49.3153518
  function handleGetGeolocation () {

    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude)
      setLocation(true)
    })
  }

  function handleReloadLocation () {
    setRefreshData(!refreshData)
    setWeatherData({} as any)
    handleGetGeolocation()
  }

  useEffect(() => {
    console.log('aaa')
    handleGetGeolocation()
  }, [refreshData])

  if (!location) {
    return <>Para visualizar as informações do clima é preciso habilitar a localização no browser</>
  }


  return (
    <MainContainer>
      <h3>Clima nas suas Coordenadas</h3>
      <hr />
      <Wrapper>
        <MainWeatherInfo name={weatherData.name} main={weatherData?.main} weather={weatherData.weather} />
        <WeatherDetails main={weatherData?.main} wind={weatherData?.wind} />
      </Wrapper>
      <ContainerButton>
        <ReloadButton onClick={() => handleReloadLocation()}>Atualizar</ReloadButton>
      </ContainerButton>
      <GlobalStyle />
    </MainContainer>
  )
}

