/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './CategoriesListItem.scss'
import React from 'react'
import { Card, CardContent, Button } from '@mui/material'
import { Link } from 'react-router-dom'

interface Props {
  id: number
  buttonTitle: string
  title: string
  author: string
  data: string
  imgCategoria: string
  buttonColor: string
}
const CategoriesListItem = ({ id, buttonTitle, title, author, data, imgCategoria, buttonColor }: Props) => {
  return (
    <Card className={`${imgCategoria}`} variant="outlined">
      <CardContent className="categoria-card-content">
        <Button className={`${buttonColor}`}>
            {buttonTitle}
        </Button>
        <h1 className="title-categories"><Link to={`/categories/${title}`}>{title}</Link></h1>
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
export default CategoriesListItem
