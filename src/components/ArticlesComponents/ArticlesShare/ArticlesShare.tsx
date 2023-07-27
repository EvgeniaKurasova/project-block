/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button } from '@mui/material'
import React from 'react'
import './ArticlesShare.scss'

interface Props {}
const ArticlesShare = (props: Props) => {
  return (
    <div className='article-share'>
       <h2 className='title-of-page-article-block'>Share Article</h2>
       <div className='button-block-articles-share'>
      <Button variant='contained' className='button-articles-share face-book'>
        <img className='button-articles-img' src='/images/app-bar-facebook.png'/>
      </Button>
      <Button variant='contained' className='button-articles-share twitter'>
      <img className='button-articles-img' src='/images/app-bar-twitter.png'/>
      </Button>
      <Button variant='contained' className='button-articles-share pinterest'>
      <img className='button-articles-img' src='/images/app-bar-pinterest.png'/>
      </Button>
      <Button variant='contained' className='button-articles-share mail'>
      <img className='button-articles-img' src='/images/app-bar-mail.png'/>
      </Button>
      <Button variant='contained' className='button-articles-share whats-app'>
      <img className='button-articles-img' src='/images/app-bar-whatsapp.png'/>
      </Button>
      </div>
      <div></div>
    </div>
  )
}
export default ArticlesShare
