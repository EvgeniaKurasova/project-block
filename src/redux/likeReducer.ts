/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type AnyAction } from 'redux'
import { LikeActionType } from './actions/LikeAction'

// type LikeState = Record<number, boolean>
// interface likeState {
//     [id: number]: boolean
//   }
const initialState: any = {
  likes: {}
}

export const likeReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LikeActionType: {
      return {
        ...state,
        likes: {
          ...state.likes,
          [action.articleId]: (state.likes[action.articleId] === undefined) ? true : !(state.likes[action.articleId] as boolean)
        }
      }
    }
  }
  return state
}
