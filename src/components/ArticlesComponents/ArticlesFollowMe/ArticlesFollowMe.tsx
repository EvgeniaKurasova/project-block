/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button } from '@mui/material'
import React from 'react'
import './ArticlesFollowMe.scss'

interface Props {}
const ArticlesFollowMe = (props: Props) => {
  return (
    <div className='articles-follow-me'>
      <img className='articles-follow-me-img' src='/images/app-bar-photo.png'/>
      <div>
        <div className='articles-follow-me-big-block-name'>
            <div className='articles-follow-me-small-block-name'>
                <div className='articles-follow-me-written-by'>written by</div>
                <h2 className='title-of-page-article-block'>Laura Nikova</h2>
            </div>
            <Button className='articles-follow-me-button'>Follow Me</Button>
        </div>
        <p className='articles-follow-me-p'>I’m Laura, a classically trained chef whose first culinary love is cooking for my family and second is helping you cook for yours</p>
      </div>
    </div>
  )
}
export default ArticlesFollowMe
