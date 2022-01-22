import React from 'react'
import { LoadingContainer } from './styles'
import { Audio } from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export function Loading () {
  return (
    <LoadingContainer>
      <div>
        <Audio
          height="90"
          width="110"
          color='#fff'
          ariaLabel='loading'
        />
        <strong>Carregando</strong>
      </div>
    </LoadingContainer>
  )
}