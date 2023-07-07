/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './ArticlesList.scss'
import React from 'react'
import { Grid } from '@mui/material'
// import { Link } from 'react-router-dom'
import ArticlesListItem from '../ArticlesListItem/ArticlesListItem'
import { articlesArray } from 'utils/articlesArray'

interface Props {}

const ArticlesList = (props: Props) => {
  return (
    <>
    <Grid container spacing={3} className='categories-list'>
      {articlesArray.map((articles) => (
        <Grid item xs={12} md={6} key={articles.id}>
          <ArticlesListItem
            key={articles.id}
            id={articles.id}
            buttonTitle={articles.buttonTitle}
            title={articles.title}
            author={articles.author}
            data={articles.data}
            categoryId={articles.categoryId}
            buttonColor={articles.buttonColor}/>
      </Grid>
      ))}
      </Grid>
    </>
  )
}
export default ArticlesList
