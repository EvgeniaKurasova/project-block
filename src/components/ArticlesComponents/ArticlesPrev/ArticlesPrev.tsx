/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import './ArticlesPrev.scss'

interface Props {}
const ArticlesPrev = (props: Props) => {
  return (
    <div>
      <h2 className='title-of-page-article-block'>Other Articles</h2>
      <div>
        <div>
            <img className='a-card-img'/>
            <div>
                <div className='a-card-prev'><img className='a-img-arrow'/>Previous</div>
                <div className='a-card-title'></div>
            </div>
        </div>
        <div>
            <img className='a-card-img'/>
            <div>
                <div className='a-card-prev'>Next<img className='a-img-arrow'/></div>
                <div className='a-card-title'></div>
            </div>
        </div>
        </div>
    </div>
  )
}
export default ArticlesPrev
