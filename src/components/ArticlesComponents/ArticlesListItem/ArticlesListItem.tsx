/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './ArticlesListItem.scss'
import React from 'react'
import { Card, CardContent, Button } from '@mui/material'
import { type Category, categoriesArray } from 'utils/categoriesArray'
import { Link } from 'react-router-dom'

interface Props {
  id: number
  buttonTitle: string
  title: string
  author: string
  data: string
  categoryId: number
  buttonColor: string
  bigImgPage: string
}

const ArticlesListItem = ({ id, buttonTitle, title, author, data, categoryId, buttonColor, bigImgPage }: Props) => {
  const category: Category = categoriesArray.find(
    (category) => {
      return category.id === categoryId
    }
  ) as Category
  return (
    <Card className='card-article-item' variant="outlined" key={id}>
      <CardContent className="article-card-content">
        <div className='card-article-img-bord'>
        <img className='card-article-img' src={`${bigImgPage}`}/>
        </div>
        <div className='card-article-text-bord'>
          <img className='card-article-like' src='..//images/like.png'/>
        <Button className={`${buttonColor}`}>
            {buttonTitle}
        </Button>
        <h1 className="title-article">
          <Link className="title-article" to={`/article/${id}`}>
          {title}
          </Link>
        </h1>
        <ul className="down-block-about">
        <li className="athor-categories test-d-none">
        {author}
        </li>
        <li className="data-categories">{data}</li>
        </ul>
        </div>
      </CardContent>
    </Card>
  )
}
export default ArticlesListItem
