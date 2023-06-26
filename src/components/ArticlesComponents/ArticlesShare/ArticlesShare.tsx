/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button } from '@mui/material'
import React from 'react'

interface Props {}
const ArticlesShare = (props: Props) => {
  return (
    <div>
       <h2>Share Article</h2>
       <div>
      <Button variant='contained'></Button>
      <Button variant='contained'></Button>
      <Button variant='contained'></Button>
      <Button variant='contained'></Button>
      <Button variant='contained'></Button>
      </div>
      <div></div>
    </div>
  )
}
export default ArticlesShare
