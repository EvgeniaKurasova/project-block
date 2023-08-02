/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './ArticlePage.scss'
import React from 'react'
import Header2 from 'Conteiner/Header2/Header2'
import {
  type Article,
  articlesArray,
  getArticlesObject
} from 'utils/articlesArray'
import { Link, useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import ArticlesShare from 'components/ArticlesComponents/ArticlesShare/ArticlesShare'
import ArticlesPrev from 'components/ArticlesComponents/ArticlesPrev/ArticlesPrev'
import ArticlesFollowMe from 'components/ArticlesComponents/ArticlesFollowMe/ArticlesFollowMe'
import Reviews from 'components/Reviews/Reviews'
import FooterVarTwo from 'components/FooterVarTwo/FooterVarTwo'

interface Props {
  articlesObject?: {
    [id: number]: Article
  }
}
const ArticlePage = ({
  articlesObject = getArticlesObject(articlesArray)
}: Props) => {
  let idPreviousArticle = 0
  let idNextArticle = Infinity
  let minArticleId = Infinity
  let maxArticleId = 0
  let imgPreviousArticle
  let imgNextArticle
  let titlePreviousArticle
  let titleNextArticle
  let dataPreviousArticle
  let dataNextArticle
  const { id } = useParams()
  const productId = id ?? ''
  articlesArray.forEach((article) => {
    if (
      article.id < idNextArticle &&
            article.id > articlesObject[parseInt(productId)].id
    ) {
      idNextArticle = article.id
    }
    if (
      article.id > idPreviousArticle &&
            article.id < articlesObject[parseInt(productId)].id
    ) {
      idPreviousArticle = article.id
    }
    if (minArticleId > article.id) minArticleId = article.id
    if (maxArticleId < article.id) maxArticleId = article.id
    if (article.id === idPreviousArticle) imgPreviousArticle = article.bigImgPage
    if (article.id === idNextArticle) imgNextArticle = article.bigImgPage
    if (article.id === idPreviousArticle) titlePreviousArticle = article.title
    if (article.id === idNextArticle) titleNextArticle = article.title
    if (article.id === idPreviousArticle) dataPreviousArticle = article.data
    if (article.id === idNextArticle) dataNextArticle = article.data
  })
  return (
        <div className='container-block'>
            <Header2 />
            <div className="block-p-n-button-fix">
              <div className="block-p-n-button">
                <div className="block-p-n-button-item p-r">
                    <div className="p-n-button-item-title p">
                        <div className="p-n-button-item-t">
                        <Link
                            to={`/article/${
                                    idPreviousArticle === 0
                                        ? maxArticleId
                                        : idPreviousArticle
                                }`}
                            >Previous
                            </Link>
                          </div>
                      </div>
                      <div className="p-n-button-item-hov p-item">
                        <div className="p-n-button-item-hov-text">
                            <div className="p-n-button-item-hov-text-data p-data">{dataPreviousArticle}</div>
                            <div className="p-n-button-item-hov-text-title p-title">
                                <Link className="p-n-button-item-hov-text-title p-title"
                                    to={`/article/${
                                        idNextArticle === Infinity
                                            ? minArticleId
                                            : idNextArticle
                                    }`}
                                >
                                    {titlePreviousArticle}
                                </Link>
                            </div>
                        </div>
                        <div className="p-n-button-item-hov-img-bord">
                        <img
                            className="p-n-button-item-hov-img"
                            src={imgPreviousArticle}
                        /></div>
                    </div>
                  </div>
                <div className="block-p-n-button-item n-r">
                    <div className="p-n-button-item-title n">
                        <div className="p-n-button-item-t">
                        <Link to={`/article/${
                                    idNextArticle === Infinity
                                        ? minArticleId
                                        : idNextArticle
                                }`}
                            >Next
                            </Link></div>
                    </div>
                    <div className="p-n-button-item-hov n-item">
                        <div className="p-n-button-item-hov-text">
                            <div className="p-n-button-item-hov-text-data n-data">{dataNextArticle}</div>
                            <div className="p-n-button-item-hov-text-title n-title">
                            <Link className="p-n-button-item-hov-text-title n-title"
                                to={`/article/${
                                    idNextArticle === Infinity
                                        ? minArticleId
                                        : idNextArticle
                                }`}
                            >{titleNextArticle}
                            </Link>
                            </div>
                        </div>
                        <div className="p-n-button-item-hov-img-bord">
                        <img
                            className="p-n-button-item-hov-img"
                            src={imgNextArticle}
                        /></div>
                    </div>
                </div>
              </div>
            </div>
            <Container className="container">
                <img
                    className="bigImgPage"
                    src={articlesObject[parseInt(productId)].bigImgPage}
                />
                <div className="title-article-page">
                    {articlesObject[parseInt(productId)].title}
                </div>
                <div
                    className="p-recipe"
                    dangerouslySetInnerHTML={{
                      __html: articlesObject[parseInt(productId)].pRecipe
                    }}
                ></div>
                <div className="text-article-page">
                    Did you make this recipe?
                </div>
                <div
                    className="p-recipe"
                    dangerouslySetInnerHTML={{
                      __html: articlesObject[parseInt(productId)].pRecipe
                    }}
                ></div>
                <div>
                    <div className="citationBlock">
                        <strong className="citation-p-block">
                            <em
                                className="citation-p"
                                dangerouslySetInnerHTML={{
                                  __html: articlesObject[parseInt(productId)]
                                    .citationP
                                }}
                            ></em>
                            <em
                                className="citation-p citation-p-small"
                                dangerouslySetInnerHTML={{
                                  __html: articlesObject[parseInt(productId)]
                                    .citationAuthor
                                }}
                            ></em>
                        </strong>
                        <div
                            className="categories-all-content"
                            dangerouslySetInnerHTML={{
                              __html: articlesObject[parseInt(productId)]
                                .citationImg
                            }}
                        ></div>
                    </div>
                    {/* <div className="nutritional-information-p">
                        {
                            articlesObject[parseInt(productId)]
                              .nutritionalInformation
                        }
                    </div> */}
                </div>
                {/* <div className="notes-block">
                    <div
                        className="notes"
                        dangerouslySetInnerHTML={{
                          __html: articlesObject[parseInt(productId)].notes
                        }}
                    ></div>
                    <div className="notes-photo-bord">
                        <div className="notes-curtain"></div>
                        <div
                            className="notes-photo"
                            dangerouslySetInnerHTML={{
                              __html: articlesObject[parseInt(productId)]
                                .notesPhoto
                            }}
                        ></div>
                    </div>
                </div> */}
                <ArticlesShare />
                <ArticlesFollowMe />
                <ArticlesPrev
                    articleId={articlesObject[parseInt(productId)].id}
                    articleTitle={articlesObject[parseInt(productId)].title}
                    articleBigImg={
                        articlesObject[parseInt(productId)].bigImgPage
                    }
                />
                <Reviews articleId={articlesObject[parseInt(productId)].id} />
            </Container>
            <FooterVarTwo />
        </div>
  )
}
export default ArticlePage
