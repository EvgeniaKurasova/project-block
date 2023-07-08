/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './ArticlePage.scss'
import React from 'react'
import Header2 from 'Conteiner/Header2/Header2'
import { type Article, articlesArray, getArticlesObject } from 'utils/articlesArray'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import ArticlesShare from 'components/ArticlesComponents/ArticlesShare/ArticlesShare'
import ArticlesPrev from 'components/ArticlesComponents/ArticlesPrev/ArticlesPrev'
import ArticlesFollowMe from 'components/ArticlesComponents/ArticlesFollowMe/ArticlesFollowMe'

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
      <Container className='container'>
      <img className='bigImgPage' src={articlesObject[parseInt(productId)].bigImgPage}/>
      <div className='title-article-page'>{articlesObject[parseInt(productId)].title}</div>
      <div className='p-recipe' dangerouslySetInnerHTML={{
        __html: articlesObject[parseInt(productId)].pRecipe
      }}></div>
      <div className='text-article-page'>Did you make this recipe?</div>
      <div className='p-recipe' dangerouslySetInnerHTML={{
        __html: articlesObject[parseInt(productId)].pRecipe
      }}></div>
      <div>
        <div className='citationBlock'>
          <strong className='citation-p-block'>
          <em className='citation-p' dangerouslySetInnerHTML={{
            __html: articlesObject[parseInt(productId)].citationP
          }}></em>
          <em className='citation-p citation-p-small' dangerouslySetInnerHTML={{
            __html: articlesObject[parseInt(productId)].citationAuthor
          }}></em>
          </strong>
        <div className='categories-all-content' dangerouslySetInnerHTML={{
          __html: articlesObject[parseInt(productId)].citationImg
        }}></div>
        </div>
        <div className='nutritional-information-p'>{articlesObject[parseInt(productId)].nutritionalInformation}</div>
      </div>
      <div className='notes-block'>
      <div className='notes' dangerouslySetInnerHTML={{
        __html: articlesObject[parseInt(productId)].notes
      }}></div>
      <div className='notes-photo-bord'>
      <div className='notes-curtain'></div>
      <div className='notes-photo' dangerouslySetInnerHTML={{
        __html: articlesObject[parseInt(productId)].notesPhoto
      }}></div>
      </div>
      </div>
      <ArticlesShare/>
      <ArticlesFollowMe/>
      <ArticlesPrev/>
      </Container>
    </div>
  )
}
export default ArticlePage
