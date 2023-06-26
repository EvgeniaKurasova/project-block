/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button } from '@mui/material'
import React from 'react'

interface Props {}
const ArticlesFollowMe = (props: Props) => {
  return (
    <div>
      <img/>
      <div>
        <div>
            <div>
                <div>written by</div>
                <h2>Laura Nikova</h2>
            </div>
            <Button>Follow Me</Button>
        </div>
        <p></p>
      </div>
    </div>
  )
}
export default ArticlesFollowMe
