/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import './ContentImgLine.scss'

interface Props {}
const ContentImgLine = (props: Props) => {
  return (
    <div className='contentImgLine'>
        <h2 className="contentImgLineTitle">Get Every Newsletter</h2>
        <div className='greenLine'></div>
        <p className="contentImgP">Get notified of the best deals on our WordPress themes.</p>
        <div></div>
    </div>
  )
}
export default ContentImgLine
