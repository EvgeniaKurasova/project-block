/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { Container } from '@mui/material'
import './Main.scss'
import LinePath from 'components/LInePath/LinePath'
import LatestPosts from 'components/LatestPosts/LatestPosts'
import React from 'react'
import ContentImgLine from 'components/ContentImgLine/ContentImgLine'

interface Props {}
const Main = (props: Props) => {
  return (
        <main className="main">
            <LinePath />
            <div className="main-block-grid">
                <Container maxWidth="md">
                    <LatestPosts />
                </Container>
            </div>
            <div className="black-line">
            </div>
            <div className="main-block-categories">
            <Container maxWidth="md">
                <ContentImgLine />
            </Container>
            </div>
            <div className='big-img-main-block'>
                <img className='big-img-main' src='images/big-img-main.jpg'/>
            </div>
        </main>
  )
}
export default Main
