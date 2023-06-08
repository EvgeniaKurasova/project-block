/* eslint-disable @typescript-eslint/explicit-function-return-type */
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'Conteiner/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'Conteiner/Main/Main'
import React from 'react'

const App = () => {
  return (
        <StyledEngineProvider injectFirst>
        <CssBaseline>
        <Header />
        <Main/>
        </CssBaseline>
        </StyledEngineProvider>
  )
}
export default App
