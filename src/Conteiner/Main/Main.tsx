/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { Container } from '@mui/material'
import './Main.scss'
import LinePath from 'components/LInePath/LinePath'
import LatestPosts from 'components/LatestPosts/LatestPosts'
import React from 'react'

interface Props {}
const Main = (props: Props) => {
  return (
    <main className='main'>
      <LinePath/>
      <div className='main-block'>
        <Container maxWidth="md">
            <LatestPosts/>

        </Container>
    </div>
    </main>
  )
}
export default Main
