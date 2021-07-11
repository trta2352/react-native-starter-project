import { CHANGE_EXPENESE_MODAL_VISIBILY} from './actionTypes'

export const changeExpenseModalVisibility = (visibility: boolean) => ({
  type: CHANGE_EXPENESE_MODAL_VISIBILY,
  visibility
})