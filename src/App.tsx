import React from 'react'
import './App.scss'
import { ThemeProvider } from '@emotion/react'
import customTheme from './constants/customTheme'
import ImageProcessPage from './pages/ImageProcessPage'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ImageProcessPage />
    </ThemeProvider>
  )
}

export default App
