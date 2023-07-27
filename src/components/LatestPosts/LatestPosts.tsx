/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './LatestPosts.scss'
import React from 'react'
// import Grid from 'components/Grid/Grid'
// import GreenLineDecor from 'components/GreenLineDecor/GreenLineDecor'

interface Props {}
const LatestPosts = (props: Props) => {
  return (
    <div className='latestPostsBlock'>
      {/* <h2 className='block-title-h2'>Latest Posts</h2>
      <GreenLineDecor/> */}
      {/* <Grid /> */}
      <img className='big-img-main' src='images/small-img-main.png'/>
      {/* <div className="blockReceips">

      </div> */}
    </div>
  )
}
export default LatestPosts
