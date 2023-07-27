/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './GreenLineDecor.scss'
import React from 'react'

interface Props {}

const GreenLineDecor = (props: Props) => {
  return (
    <div className='greenElemBlock'>
    <div className='longGreen'></div>
    <div className='shortGreen'></div>
    <div className='shortGreen'></div>
    <div className='shortGreen'></div>
  </div>
  )
}
export default GreenLineDecor
