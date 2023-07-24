/* eslint-disable @typescript-eslint/no-empty-interface */
import Header2 from 'Conteiner/Header2/Header2'
import FooterVarTwo from 'components/FooterVarTwo/FooterVarTwo'
import React from 'react'

interface Props {}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const LikePage = (props: Props) => {
  return (
    <div>
        <Header2/>
        <FooterVarTwo/>
    </div>
  )
}
export default LikePage
