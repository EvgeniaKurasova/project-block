/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './CategoriesListItem.scss'
import React from 'react'
import { Card, CardContent, Button } from '@mui/material'

interface Props {}
const CategoriesListItem = (props: Props) => {
  return (
    <Card className='categoria'>
        <CardContent>
            <Button className='button-categories'></Button>
            <h1 className='title-categories'></h1>
            <div className='athor-categories'></div>
            <div className='data-categories'></div>
        </CardContent>
    </Card>
  )
}
export default CategoriesListItem
