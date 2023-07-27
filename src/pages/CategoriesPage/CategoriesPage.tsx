/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './CategoriesPage.scss'
import React from 'react'
import CategoriesList from 'components/Categories/CategoriesList'
import Header2 from 'Conteiner/Header2/Header2'
import { Card, Container } from '@mui/material'
import FooterVarTwo from 'components/FooterVarTwo/FooterVarTwo'

interface Props {}
const CategoriesPage = (props: Props) => {
  return (
    <div>
      <Header2 />
      <Container className='container'>
      <div className='categories-all-content'>
        <Card className='categories-title-block'>
          <h3 className='categories-title-block-name'>Categories</h3>
          <div className='categories-title-block-black-line'></div>
          <p className='categories-title-block-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Card>
      <CategoriesList />
      <div className='categories-aside-content'></div>
      </div>
      </Container>
      <FooterVarTwo/>
    </div>
  )
}
export default CategoriesPage
