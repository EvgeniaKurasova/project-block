/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './LatestPosts.scss'
import React from 'react'

interface Props {}
const LatestPosts = (props: Props) => {
  return (
    <div className='latestPostsBlock'>
      <h2 className='latestPostsBlockTitle'>Latest Posts</h2>
      <div className='greenElemBlock'>
        <div className='longGreen'></div>
        <div className='shortGreen'></div>
        <div className='shortGreen'></div>
        <div className='shortGreen'></div>
      </div>
      <div className="blockReceips">

      </div>
    </div>
  )
}
export default LatestPosts
