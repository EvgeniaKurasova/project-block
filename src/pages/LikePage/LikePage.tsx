/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { Card, Container, Grid } from '@mui/material'
import Header2 from 'Conteiner/Header2/Header2'
import ArticlesListItem from 'components/ArticlesComponents/ArticlesListItem/ArticlesListItem'
import FooterVarTwo from 'components/FooterVarTwo/FooterVarTwo'
import React from 'react'
import { useAppSelector } from 'redux/hooks'
import { articlesArray } from 'utils/articlesArray'

interface Props {}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const LikePage = (props: Props) => {
  const likedArticles = useAppSelector((state) => state.articlesLikeState.likes) as boolean[]
  const articles = articlesArray.filter((article) => likedArticles[article.id])
  return (
    <div className='container-block'>
        <Header2/>
        <Container className='container'>
        <Card className='categories-title-block'>
          <h3 className='categories-title-block-name'>Liked articles</h3>
          <div className='categories-title-block-black-line'></div>
          <p className='categories-title-block-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Card>
        <Grid container spacing={3} className='categories-list'>
          {articles.map((article) => (
            <Grid item xs={12} md={6} key={article.id}>
              <ArticlesListItem
                bigImgPage={article.bigImgPage}
                key={article.id}
                id={article.id}
                buttonTitle={article.buttonTitle}
                title={article.title}
                author={article.author}
                data={article.data}
                categoryId={article.categoryId}
                buttonColor={article.buttonColor}/>
          </Grid>
          ))}
      </Grid>
        </Container>
        <FooterVarTwo/>
    </div>
  )
}
export default LikePage
