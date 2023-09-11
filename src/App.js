import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import {indigo, pink} from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
    light: '#757de8',
    main: '#3f51b5',
    dark: '#002984',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff79b0',
    main: '#ff4081',
    dark: '#c60055',
    contrastText: '#000',
  },
    openTitle: indigo['400'],
    protectedTitle: pink['400'],
    type: 'light'
  }
})

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <MainRouter/>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
