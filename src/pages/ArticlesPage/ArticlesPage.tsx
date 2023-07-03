/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useParams } from 'react-router-dom'
// import ArticlesList from 'components/ArticlesComponents/ArticlesList/ArticlesList'
import './ArticlesPage.scss'
import React from 'react'
import Header2 from 'Conteiner/Header2/Header2'
// import articlesArray, { getArticlesObject, Article } from 'utils/articlesArray'
import articlesArray, { getArticlesObject } from 'utils/articlesArray'

interface Props {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  articlesObject?: {
    [title: string]: any
  }
}
const ArticlesPage = ({
  articlesObject = getArticlesObject(articlesArray)
}: Props) => {
  const { title } = useParams()
  console.log(title)
  console.log(articlesObject)
  console.log(articlesArray)

  return (
    <div>
      <Header2/>
      <div>p</div>
    </div>
  )
}
export default ArticlesPage
