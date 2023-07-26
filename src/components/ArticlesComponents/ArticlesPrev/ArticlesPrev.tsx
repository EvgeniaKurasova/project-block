/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import './ArticlesPrev.scss'
import { Link } from 'react-router-dom'
import { reviewsArray } from 'utils/reviewsArray'
import { articlesArray } from 'utils/articlesArray'

interface Props {
  articleId: number
}
const ArticlesPrev = ({ articleId }: Props) => {
  let idPreviousArticle = 0
  let idNextArticle = Infinity
  let minArticleId = Infinity
  let maxArticleId = 0
  articlesArray.forEach(
    (article) => {
      if (article.id < idNextArticle && article.id > articleId) {
        idNextArticle = article.id
      }
      if (article.id > idPreviousArticle && article.id < articleId) {
        idPreviousArticle = article.id
      }
      if (minArticleId > article.id) minArticleId = article.id
      if (maxArticleId < article.id) maxArticleId = article.id
    }
  )
  if (articleId === 11) {
    reviewsArray.push({
      id: maxArticleId++,
      author: 'author 30',
      text: 'review 30',
      articleId
    })
  }
  return (
    <div>
      <h2 className='title-of-page-article-block'>Other Articles</h2>
      <div>
        <div>
            <img className='a-card-img'/>
            <div>
                <div className='a-card-prev'><img className='a-img-arrow'/>
                <Link to={`/article/${idPreviousArticle === 0 ? maxArticleId : idPreviousArticle}`}>
                Previous
                </Link></div>
                <div className='a-card-title'></div>
            </div>
        </div>
        <div>
            <img className='a-card-img'/>
            <div>
                <div className='a-card-prev'>
                <Link to={`/article/${idNextArticle === Infinity ? minArticleId : idNextArticle}`}>
                Next
                </Link><img className='a-img-arrow'/></div>
                <div className='a-card-title'></div>
            </div>
        </div>
        </div>
    </div>
  )
}
export default ArticlesPrev
