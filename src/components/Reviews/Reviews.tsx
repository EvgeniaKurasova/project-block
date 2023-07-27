/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import './Reviews.scss'
import { Button, TextField, Card } from '@mui/material'
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
    <div className='article-reviews-block'>
        <h2 className='title-of-page-article-block'>
            Reviews
        </h2>
        {
          reviews.map(({ author, text }, i) => {
            return (<Card className='reviews-card' key={i}>
              <div className='reviews-name'>{ author }:</div><div className='reviews-text'>{ text }</div></Card>)
          })
        }
        <div className='add-reviews-block'>
          <h2 className='title-of-add-reviews-block'>Add Review</h2>
          <TextField variant='filled' placeholder="Name" value={author} onChange={e => { setAuthor(e.target.value) }}></TextField>
          <TextField variant='filled' placeholder="Your reviews" value={text} onChange={e => { setText(e.target.value) }}></TextField>
          <Button className='add-reviews-button' onClick={addReview}>Add Review</Button>
        </div>
    </div>
  )
}
export default Reviews
