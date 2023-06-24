/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './AboutUsPage.scss'
import React from 'react'
import FooterVarTwo from 'components/FooterVarTwo/FooterVarTwo'
import Header2 from 'Conteiner/Header2/Header2'

interface Props {}
const AboutUsPage = (props: Props) => {
  return (
    <div>
        <Header2/>
        <FooterVarTwo/>
    </div>
  )
}
export default AboutUsPage
