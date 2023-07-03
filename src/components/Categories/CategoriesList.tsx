/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './CategoriesList.scss'
import React from 'react'
import { Typography, Grid } from '@mui/material'
import CategoriesListItem from './CategoriesListItem'
import categoriesArray from 'utils/categoriesArray'

interface Props {}

const CategoriesList = (props: Props) => {
  return (
    <>
    <Typography component='h2' variant='h3'>Categories List</Typography>
    <Grid container spacing={3} className='categories-list'>
        {categoriesArray.map((categoria) => (
            <Grid item xs={12} md={6} key={categoria.id}>
                <CategoriesListItem
                key={categoria.id}
                id={categoria.id}
                buttonTitle={categoria.buttonTitle}
                title={categoria.title}
                author={categoria.author}
                data={categoria.data}
                imgCategoria={categoria.imgCategoria}
                buttonColor={categoria.buttonColor}/>
            </Grid>
        ))}
    </Grid>
    </>
  )
}
export default CategoriesList
