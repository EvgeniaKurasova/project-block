/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useParams } from 'react-router-dom'
// import ArticlesList from 'components/ArticlesComponents/ArticlesList/ArticlesList'
import './ArticlesPage.scss'
import React from 'react'
import Header2 from 'Conteiner/Header2/Header2'
// import articlesArray, { getArticlesObject, Article } from 'utils/articlesArray'
import { type Category, categoriesArray } from 'utils/categoriesArray'
import ArticlesListItem from 'components/ArticlesComponents/ArticlesListItem/ArticlesListItem'
import { articlesArray } from 'utils/articlesArray'

const ArticlesPage = () => {
  const { id } = useParams() as { id: string }
  const category: Category = categoriesArray.find(
    (category) => {
      return category.id === +id
    }
  ) as Category

  const articlesFromCategory = articlesArray.filter((article: any) => article.categoryId === category.id)

  return (
    <div>
      <Header2/>
      <div>
        {articlesFromCategory.map((article) => {
          return (
            <ArticlesListItem
              key={article.id}
              id={article.id}
              buttonTitle={article.buttonTitle}
              title={article.title}
              author={article.author}
              data={article.data}
              categoryId={article.categoryId}
              buttonColor={article.buttonColor}/>
          )
        })}
    </div>
    </div>
  )
}
export default ArticlesPage
