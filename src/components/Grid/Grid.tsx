/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './Grid.scss'
import React from 'react'

interface Props {}
const Grid = (props: Props) => {
  return (
    <div className='mainGridCont'>
        <div className='gridItem gitem1'></div>
        <div className='gridItem gitem2'></div>
        <div className='gridItem gitem3'></div>
        <div className='gridItem gitem4'></div>
        <div className='gridItem gitem5'></div>
        <div className='gridItem gitem6'></div>
        <div className='gridItem gitem7'></div>
        <div className='gridItem gitem8'></div>
        <div className='gridItem gitem9'></div>
        <div className='gridItem gitem10'></div>
    </div>
  )
}
export default Grid
