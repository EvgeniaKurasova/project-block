/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './CategoriesList.scss'
import React from 'react'
import { Typography } from '@mui/material'
import CategoriesListItem from './CategoriesListItem'

interface Props {}
const CategoriesList = (props: Props) => {
  return (
    <>
    <Typography component='h2' variant='h3'>Categories List</Typography>
    <CategoriesListItem/>
    </>
  )
}
export default CategoriesList
