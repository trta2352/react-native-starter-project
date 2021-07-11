import {CHANGE_EXPENESE_MODAL_VISIBILY} from "../actions/actionTypes";

const initialState = {
  visibility: false
}

export interface IExpense  {
  visibility: boolean
}

const Expense = (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_EXPENESE_MODAL_VISIBILY":
      console.log("spreminjam")
      return {visibility: action.visibility }
    default:
      return state
  }
}

export default Expense
