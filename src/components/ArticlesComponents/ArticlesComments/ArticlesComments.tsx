/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CheckBox } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

interface Props {}
const ArticlesComments = (props: Props) => {
  return (
    <div>
      <h2>No Comment! Be the first one.</h2>
      <h2>Leave a Reply</h2>
      <p></p>
      <textarea
            placeholder='Comment'
        />
        <div>
            <input placeholder='Name *'/>
            <input placeholder='Email *'/>
        </div>
        <input placeholder='Website'/>
        <CheckBox/>
      <Button>Post Comment</Button>
    </div>
  )
}
export default ArticlesComments
