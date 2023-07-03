/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './ArticlesListItem.scss'
import React from 'react'
import { Card, CardContent, Button } from '@mui/material'
// import { Link } from 'react-router-dom'

interface Props {
  id: number
  buttonTitle: string
  title: string
  author: string
  data: string
  categoria: string
  buttonColor: string
}

const ArticlesListItem = ({ id, buttonTitle, title, author, data, categoria, buttonColor }: Props) => {
  return (
    <Card className={`${categoria}`} variant="outlined" key={id}>
      <CardContent className="categoria-card-content">
        <Button className={`${buttonColor}`}>
            {buttonTitle}
        </Button>
        <h1 className="title-categories">{title}</h1>
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
