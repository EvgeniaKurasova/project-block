/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './CategoriesListItem.scss'
import React from 'react'
import { Card, CardContent, Button } from '@mui/material'

interface Props {
  buttonTitle: string
  title: string
  author: string
  data: string
}

const CategoriesListItem = (props: Props) => {
  return (
    <Card className='categoria' variant='outlined'>
        <CardContent>
            <Button className='button-categories'>{props.buttonTitle}</Button>
            <h1 className='title-categories'>{props.title}</h1>
            <div className='down-block-about'>
            <div className='athor-categories'>{props.author}</div>
            <div className='data-categories'>{props.data}</div>
            </div>
        </CardContent>
    </Card>
  )
}
export default CategoriesListItem
