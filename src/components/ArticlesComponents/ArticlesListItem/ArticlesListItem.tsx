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
}

const ArticlesListItem = ({ id, buttonTitle, title, author, data, categoryId, buttonColor }: Props) => {
  const category: Category = categoriesArray.find(
    (category) => {
      return category.id === categoryId
    }
  ) as Category
  return (
    <Card className={`${category.title}`} variant="outlined" key={id}>
      <CardContent className="categoria-card-content">
        <Button className={`${buttonColor}`}>
            {buttonTitle}
        </Button>
        <h1 className="title-categories">
          <Link to={`/article/${id}`}>
          {title}
          </Link>
        </h1>
        <ul className="down-block-about">
        <li className="athor-categories test-d-none">
        {author}
        </li>
        <li className="data-categories">{data}</li>
        </ul>
      </CardContent>
    </Card>
  )
}
export default ArticlesListItem
