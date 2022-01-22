export interface WeatherDataModel {
  name?: string
  main: {
    feels_like: number
    grnd_level: number
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_max: number
    temp_min: number
  }

  wind?: {
    deg: number
    gust: number
    speed: number
  }

  weather?: WeatherModel[]
}

export interface WeatherModel {
  description?: string
  icon?: string
  main?: string
  id?: number
}
