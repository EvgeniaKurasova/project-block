/* eslint-disable @typescript-eslint/no-empty-interface */
import { Card, Container } from '@mui/material'
import Header2 from 'Conteiner/Header2/Header2'
import FooterVarTwo from 'components/FooterVarTwo/FooterVarTwo'
import React from 'react'

interface Props {}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const LikePage = (props: Props) => {
  return (
    <div>
        <Header2/>
        <Container className='container'>
        <Card className='categories-title-block'>
          <h3 className='categories-title-block-name'>Liked articles</h3>
          <div className='categories-title-block-black-line'></div>
          <p className='categories-title-block-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Card>
        </Container>
        <FooterVarTwo/>
    </div>
  )
}
export default LikePage
