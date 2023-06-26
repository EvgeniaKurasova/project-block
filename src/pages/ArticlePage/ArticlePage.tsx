/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './ArticlePage.scss'
import React from 'react'
import Header2 from 'Conteiner/Header2/Header2'

interface Props {}
const ArticlePage = (props: Props) => {
  return (
    <div>
      <Header2 />
      <div className='categories-all-content'>
      <div className='categories-aside-content'></div>
      </div>
    </div>
  )
}
export default ArticlePage
