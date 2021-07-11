import { combineReducers } from 'redux'

import expenseReducer from './ExpenseReducer'

export const rootReducer = combineReducers({
  expense: expenseReducer,
})

export  type RootState = ReturnType<typeof rootReducer>