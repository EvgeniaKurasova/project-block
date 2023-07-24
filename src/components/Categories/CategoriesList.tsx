/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './CategoriesList.scss'
import React from 'react'
import { Grid } from '@mui/material'
import CategoriesListItem from './CategoriesListItem'
import { categoriesArray } from 'utils/categoriesArray'

interface Props {}

const CategoriesList = (props: Props) => {
  return (
    <>
    <Grid container spacing={3} className='categories-list'>
        {categoriesArray.map((category) => (
            <Grid item xs={12} md={6} key={category.id}>
                <CategoriesListItem category={category}/>
            </Grid>
        ))}
    </Grid>
    </>
  )
}
export default CategoriesList
