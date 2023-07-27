/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import './ContentImgLine.scss'
import { Button } from '@mui/material'

interface Props {}
const ContentImgLine = (props: Props) => {
  return (
    <div className='content-img-line'>
      <div className="elementor-shape-foot elementor-shape-bottom" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
        <path className="elementor-shape-fill" d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z"></path>
        </svg>
      </div>
      <div className='content-img-line-block'>
        <h2 className="contentImgLineTitle">Get Every Newsletter</h2>
        <div className='greenLine'></div>
        <p className="contentImgP">Get notified of the best deals on our WordPress themes.</p>
        <div className='img-mail-block'>
        <input className='mail-img-line' type='text' value="Email"/>
        <Button className='button-img-line'>Subscribe</Button>
        </div>
      </div>
      <div className="elementor-shape-foot elementor-shape-foot-down elementor-shape-bottom" data-negative="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
        <path className="elementor-shape-fill" d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z"></path>
        </svg>
      </div>
    </div>
  )
}
export default ContentImgLine
