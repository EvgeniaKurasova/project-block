/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './CategoriesPage.scss'
import React from 'react'
import CategoriesList from 'components/Categories/CategoriesList'
import Header2 from 'Conteiner/Header2/Header2'

interface Props {}
const CategoriesPage = (props: Props) => {
  return (
    <div>
      <Header2 />
      <div className='categories-all-content'>
      <CategoriesList />
      <div className='categories-aside-content'></div>
      </div>
    </div>
  )
}
export default CategoriesPage
