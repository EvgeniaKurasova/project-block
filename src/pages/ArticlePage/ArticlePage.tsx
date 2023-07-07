/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './ArticlePage.scss'
import React from 'react'
import Header2 from 'Conteiner/Header2/Header2'
import { type Article, articlesArray, getArticlesObject } from 'utils/articlesArray'
import { useParams } from 'react-router-dom'

interface Props {
  articlesObject?: {
    [id: number]: Article
  }
}
const ArticlePage = ({
  articlesObject = getArticlesObject(articlesArray)
}: Props) => {
  const { id } = useParams()
  const productId = id ?? ''
  return (
    <div>
      <Header2 />
      <img src={articlesObject[parseInt(productId)].bigImgPage}/>
      <div dangerouslySetInnerHTML={{
        __html: articlesObject[parseInt(productId)].title
      }}></div>
      <div className='categories-all-content' dangerouslySetInnerHTML={{
        __html: articlesObject[parseInt(productId)].bigImgPage
      }}></div>
      <div className='categories-all-content1' dangerouslySetInnerHTML={{
        __html: articlesObject[parseInt(productId)].pRecipe
      }}>
       {/* {articlesObject[parseInt(productId)].title} */}
      </div>
    </div>
  )
}
export default ArticlePage
