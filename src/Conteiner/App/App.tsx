/* eslint-disable @typescript-eslint/explicit-function-return-type */
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactsPage from 'pages/ContactsPage/ContactsPage'
import Home from 'pages/Home/Home'
import CategoriesPage from 'pages/CategoriesPage/CategoriesPage'
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage'
import ArticlePage from 'pages/ArticlePage/ArticlePage'
import ArticlesPage from 'pages/ArticlesPage/ArticlesPage'
import LikePage from 'pages/LikePage/LikePage'

const App = () => {
  return (
        <StyledEngineProvider injectFirst>
        <CssBaseline>
        <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/contacts' element={<ContactsPage />} />
             <Route path='/categories' element={<CategoriesPage />} />
             <Route path='/about_us' element={<AboutUsPage />} />
             <Route path='/liked' element={<ArticlePage />} />
             <Route path='/categories/:id' element={<ArticlesPage />} />
             <Route path='/article/:id' element={<ArticlePage />} />
             <Route path='/liked_articles' element={<LikePage />} />
        </Routes>
        </CssBaseline>
        </StyledEngineProvider>
  )
}
export default App
