/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './CategoriesListItem.scss'
import React from 'react'
import { Card, CardContent, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { type Category } from 'utils/categoriesArray'

interface Props {
  category: Category
}
const CategoriesListItem = ({ category }: Props) => {
  return (
    <Card className={`${category.imgCategoria}`} variant="outlined">
      <CardContent className="categoria-card-content">
        <Button className={`${category.buttonColor}`}>
            {category.buttonTitle}
        </Button>
        <h1 className="title-categories"><Link to={`/categories/${category.id}`}>{category.title}</Link></h1>
        <ul className="down-block-about">
        <li className="athor-categories test-d-none">
        {category.author}
        </li>
        <li className="data-categories">{category.data}</li>
        </ul>
      </CardContent>
    </Card>
  )
}
export default CategoriesListItem
