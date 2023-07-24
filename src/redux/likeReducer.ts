/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type AnyAction } from 'redux'

type likeState = Record<number, boolean>
// interface likeState {
//     [id: number]: boolean
//   }
const initialState: likeState = { 1: true, 2: true }

export const likeReducer = (state = initialState, action: AnyAction) => state
