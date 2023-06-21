/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import Header from 'Conteiner/Header/Header'
import Main from 'Conteiner/Main/Main'

interface Props {}

const Home = (props: Props) => {
  return (
    <div>
        <Header />
        <Main/>
    </div>
  )
}
export default Home
