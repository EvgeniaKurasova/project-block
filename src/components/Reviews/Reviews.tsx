/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
// import './LinePath.scss'
import { Button, TextField, Typography } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import { type Review, reviewsArray } from 'utils/reviewsArray'

interface Props {
  articleId: number
}
const Reviews = ({ articleId }: Props) => {
  const [author, setAuthor] = useState<string>('')
  const [text, setText] = useState<string>('')
  const reviews = reviewsArray.filter(
    (review) => review.articleId === articleId
  )
  const addReview = () => {
    let id = 0
    reviewsArray.forEach((review) => { if (review.id > id) id = review.id })
    id++
    reviewsArray.push({ id, text, author, articleId })
    setAuthor('')
    setText('')
  }
  return (
    <div>
        <Typography variant='h4'>
            Reviews
        </Typography>
        {
          reviews.map(({ author, text }, i) => {
            return (<div key={i}>{ author + ': ' + text }</div>)
          })
        }
        <div>
          <TextField value={author} onChange={e => { setAuthor(e.target.value) }}></TextField>
          <TextField value={text} onChange={e => { setText(e.target.value) }}></TextField>
          <Button onClick={addReview}>Add Review</Button>
        </div>
    </div>
  )
}
export default Reviews
