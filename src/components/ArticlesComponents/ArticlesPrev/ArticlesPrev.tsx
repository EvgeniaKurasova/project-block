/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import './ArticlesPrev.scss'
import { Link } from 'react-router-dom'
import { reviewsArray } from 'utils/reviewsArray'
import { articlesArray } from 'utils/articlesArray'

interface Props {
  articleId: number
  articleTitle: string
  articleBigImg: string
}
const ArticlesPrev = ({ articleId, articleTitle, articleBigImg }: Props) => {
  let idPreviousArticle = 0
  let idNextArticle = Infinity
  let minArticleId = Infinity
  let maxArticleId = 0
  let imgPreviousArticle
  let imgNextArticle
  let titlePreviousArticle
  let titleNextArticle
  articlesArray.forEach((article) => {
    if (article.id < idNextArticle && article.id > articleId) {
      idNextArticle = article.id
    }
    if (article.id > idPreviousArticle && article.id < articleId) {
      idPreviousArticle = article.id
    }
    if (minArticleId > article.id) minArticleId = article.id
    if (maxArticleId < article.id) maxArticleId = article.id
    if (article.id === idPreviousArticle) imgPreviousArticle = article.bigImgPage
    if (article.id === idNextArticle) imgNextArticle = article.bigImgPage
    if (article.id === idPreviousArticle) titlePreviousArticle = article.title
    if (article.id === idNextArticle) titleNextArticle = article.title
  })
  if (articleId === 11) {
    reviewsArray.push({
      id: maxArticleId++,
      author: 'author 30',
      text: 'review 30',
      articleId
    })
  }
  return (
        <div className="article-block-p-n">
            <h2 className="title-of-page-article-block">Other Articles</h2>
            <div className="article-block-p-n-main">
                <div className="article-block-p-n-item">
                    <div className="a-card-img-container">
                        <img className="a-card-img" src={imgPreviousArticle} />
                    </div>
                    <div>
                        <div className="a-card-prev">
                            <img className="a-img-arrow" src='..//images/arrow-left-gray.png'/>
                            <Link
                                to={`/article/${
                                    idPreviousArticle === 0
                                        ? maxArticleId
                                        : idPreviousArticle
                                }`}
                            >
                                Previous
                            </Link>
                        </div>
                        <div className="a-card-title">
                        <Link className='a-line'
                                to={`/article/${
                                    idNextArticle === Infinity
                                        ? minArticleId
                                        : idNextArticle
                                }`}
                            >{titlePreviousArticle}
                            </Link>
                            </div>
                    </div>
                </div>
                <div className="article-block-p-n-item">
                    <div className="a-card-img-container">
                        <img className="a-card-img" src={imgNextArticle} />
                    </div>
                    <div>
                        <div className="a-card-prev">
                            <Link
                                to={`/article/${
                                    idNextArticle === Infinity
                                        ? minArticleId
                                        : idNextArticle
                                }`}
                            >
                                Next
                            </Link>
                            <img className="a-img-arrow" src='..//images/arrow-right-gray.png'/>
                        </div>
                        <div className="a-card-title">
                        <Link className='a-line'
                                to={`/article/${
                                    idNextArticle === Infinity
                                        ? minArticleId
                                        : idNextArticle
                                }`}
                            >{titleNextArticle}
                            </Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default ArticlesPrev
