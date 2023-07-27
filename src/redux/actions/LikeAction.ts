interface LikeAction {
  type: string
  articleId: number
}

const LikeActionType = 'LikeActionType'

const createLikeAction = (articleId: number): LikeAction => {
  return {
    type: LikeActionType,
    articleId
  }
}

export { LikeActionType }
export default createLikeAction
