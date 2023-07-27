/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './ArticlesListItem.scss'
import React from 'react'
import { Card, CardContent, Button } from '@mui/material'
import { type Category, categoriesArray } from 'utils/categoriesArray'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import createLikeAction from 'redux/actions/LikeAction'

interface Props {
  id: number
  buttonTitle: string
  title: string
  author: string
  data: string
  categoryId: number
  buttonColor: string
  bigImgPage: string
}

const ArticlesListItem = ({ id, buttonTitle, title, author, data, categoryId, buttonColor, bigImgPage }: Props) => {
  const category: Category = categoriesArray.find(
    (category) => {
      return category.id === categoryId
    }
  ) as Category
  const isLiked = useAppSelector((state) => state.articlesLikeState.likes[id]) as boolean
  const dispatch = useAppDispatch()
  const likeArticle = () => {
    dispatch(createLikeAction(id))
  }
  return (
    <Card className='card-article-item' variant="outlined" key={id}>
      <CardContent className="article-card-content">
        <div className='card-article-img-bord'>
        <img className='card-article-img' src={`${bigImgPage}`}/>
        </div>
        <div className='card-article-text-bord'>
        <Button className='card-article-like-button' onClick={likeArticle}>{isLiked
          ? <img className='card-article-like' src='..//images/like.png'/>
          : <img className='card-article-like' src='..//images/like-white-border.png'/>}</Button>
        <Button>
            <Link className={`${buttonColor}`} to={`/categories/${categoryId}`}>
            {buttonTitle}
            </Link>
        </Button>
        <h1 className="title-article">
          <Link className="title-article" to={`/article/${id}`}>
          {title}
          </Link>
        </h1>
        <ul className="down-block-about">
        <li className="athor-categories test-d-none">
        {author}
        </li>
        <li className="data-categories">{data}</li>
        </ul>
        </div>
      </CardContent>
    </Card>
  )
}
export default ArticlesListItem
