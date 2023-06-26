/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './CategoriesListItem.scss'
import React from 'react'
import { Card, CardContent, Button } from '@mui/material'

interface Props {
  buttonTitle: string
  title: string
  author: string
  data: string
  imgCategoria: string
  buttonColor: string
}
// interface State {
//   color: string
// }
// class CategoriesListItem extends React.Component<Props, State> {
//   state = {
//     color: 'green'
//   }
//   render() {
//     const{ buttonTitle, title, author, data, img, buttonColor } = this.props
//         return (
//             <Card className='categoria' variant='outlined'>
//                     <CardContent className='categoria-card-content'>
//                     <img src={props.img} className='card-content-img'/>
//                     <Button className='button-categories'>{props.buttonTitle}</Button>
//                     <h1 className='title-categories'>{props.title}</h1>
//                     <ul className='down-block-about'>
//                     <li className='athor-categories test-d-none'>{props.author}</li>
//                     <li className='data-categories'>{props.data}</li>
//                     </ul>
//                     </CardContent>
//             </Card>
//           )
//   }
// }

const CategoriesListItem = (props: Props) => {
  return (
    <Card className={`${props.imgCategoria}`} variant="outlined">
      <CardContent className="categoria-card-content">
        <Button className={`${props.buttonColor}`}>
            {props.buttonTitle}
        </Button>
        <h1 className="title-categories">{props.title}</h1>
        <ul className="down-block-about">
        <li className="athor-categories test-d-none">
        {props.author}
        </li>
        <li className="data-categories">{props.data}</li>
        </ul>
      </CardContent>
    </Card>
  )
}
export default CategoriesListItem
