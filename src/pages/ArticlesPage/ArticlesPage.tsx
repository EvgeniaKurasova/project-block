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
import { Card, Grid, Container } from '@mui/material'
import FooterVarTwo from 'components/FooterVarTwo/FooterVarTwo'

const ArticlesPage = () => {
  const { id } = useParams() as { id: string }
  const category: Category = categoriesArray.find(
    (category) => {
      return category.id === +id
    }
  ) as Category

  const articlesFromCategory = articlesArray.filter((article: any) => article.categoryId === category.id)

  console.log(category.id)

  return (
    <div>
      <Header2/>
      <Container className='container'>
      <Card className='categories-title-block'>
          <h3 className='categories-title-block-name'>{category.title}</h3>
          <div className='categories-title-block-black-line'></div>
          <p className='categories-title-block-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Card>
      <div>
      <Grid container spacing={3} className='categories-list'>
        {articlesFromCategory.map((article) => {
          return (
            <Grid item xs={12} md={6} key={article.id}>
            <ArticlesListItem
              key={article.id}
              id={article.id}
              buttonTitle={category.buttonTitle}
              title={article.title}
              author={article.author}
              data={article.data}
              categoryId={article.categoryId}
              buttonColor={category.buttonColor}
              bigImgPage={article.bigImgPage}/>
              </Grid>
          )
        })}
        </Grid>
    </div>
    </Container>
    <FooterVarTwo/>
    </div>
  )
}
export default ArticlesPage
