/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import Header from 'Conteiner/Header/Header'
import Main from 'Conteiner/Main/Main'
import FooterVarOne from 'components/FooterVarOne/FooterVarOne'

interface Props {}

const Home = (props: Props) => {
  return (
    <div className='container-block'>
        <Header/>
        <Main/>
        <FooterVarOne/>
    </div>
  )
}
export default Home
